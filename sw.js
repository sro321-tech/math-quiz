self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("math-quiz-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./logo-192.png.png",
        "./logo-512.png.png"
        ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
