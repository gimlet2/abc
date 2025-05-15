const CACHE_NAME = 'letter-display-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    // Add any other assets your app uses
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});