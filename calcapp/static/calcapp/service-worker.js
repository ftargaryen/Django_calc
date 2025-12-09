const CACHE = 'dark-calc-v1';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll([
      '/',
      '/static/calcapp/style.css',
      '/static/calcapp/script.js',
      '/static/calcapp/icons/icon1.png',
      '/static/calcapp/icons/icon2.png',
      '/static/calcapp/icons/icon3.png',
      '/static/calcapp/icons/icon4.png',
      '/static/calcapp/icons/icon5.png'
    ]))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});