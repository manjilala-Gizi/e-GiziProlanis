/* e-GiziProlanis — service worker (mode offline)
   Naikkan CACHE_VERSION setiap kali ada file yang diubah,
   agar HP pengguna mengambil versi terbaru saat online. */
const CACHE_VERSION = "egiziprolanis-v1.2.3";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/logo-poltekkes.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/icon-maskable-512.png",
  "./assets/apple-touch-icon.png",
  "./assets/favicon.png",
  "./assets/piring.png",
  "./assets/lib/html2canvas.min.js"
];

// Ambil file langsung dari server (melewati cache browser) saat memasang versi baru
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(c => c.addAll(FILES.map(u => new Request(u, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Halaman utama: utamakan versi terbaru dari internet (maks. 4 detik), bila gagal pakai salinan offline
function halamanTerbaru(req) {
  const dariJaringan = fetch(req, { cache: "no-store" }).then(res => {
    if (res && res.ok) {
      const copy = res.clone();
      caches.open(CACHE_VERSION).then(c => c.put("./index.html", copy));
    }
    return res;
  });
  const batasWaktu = new Promise((_, tolak) => setTimeout(() => tolak(new Error("timeout")), 4000));
  return Promise.race([dariJaringan, batasWaktu])
    .catch(() => caches.match("./index.html").then(hit => hit || dariJaringan));
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    event.respondWith(halamanTerbaru(req));
    return;
  }
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.ok && new URL(req.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, copy));
        }
        return res;
      });
    })
  );
});
