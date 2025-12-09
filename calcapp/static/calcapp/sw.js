const cacheName = 'calc-app-v1';
const assetsToCache = [
  '/',
  '/static/calcapp/style.css',
  '/static/calcapp/script.js',
  '/static/calcapp/index.html',
  '/static/calcapp/icon1.png',
  '/static/calcapp/icon2.png',
  '/static/calcapp/icon3.png',
  '/static/calcapp/icon4.png',
  '/static/calcapp/icon5.png'
];

// Install event - caching files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assetsToCache))
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (key !== cacheName) return caches.delete(key);
      }))
    )
  );
});

// Fetch event - serve cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
