const CACHE = 'math-quiz-v1';
const toCache = [
  '.',
  'index.html',
  'manifest.json'
  // add 'icon-192.png','icon-512.png' if you include them
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("math-quiz-cache").then((cache) => {
      return cache.addAll(["/", "/index.html", "/style.css", "/script.js"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
