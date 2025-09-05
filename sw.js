const CACHE = 'math-quiz-v1';
const toCache = [
  '.',
  'index.html',
  'manifest.json'
  // add 'icon-192.png','icon-512.png' if you include them
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(toCache))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
