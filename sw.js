/* e-GiziProlanis — service worker (mode offline)
   Naikkan CACHE_VERSION setiap kali ada file yang diubah,
   agar HP pengguna mengambil versi terbaru saat online. */
const CACHE_VERSION = "egiziprolanis-v1.0.0";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/logo-poltekkes.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/icon-maskable-512.png",
  "./assets/apple-touch-icon.png",
  "./assets/favicon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.ok && new URL(req.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => req.mode === "navigate" ? caches.match("./index.html") : undefined);
    })
  );
});
