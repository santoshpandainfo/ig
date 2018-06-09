// Listen for install event, set callback

var CACHE_NAME = 'static-cache';

var urlsToCache = [
    'index.html',
    'main.css',
    'manifest.json',
    'resources/images/android-con-48x48.png',
    'resources/images/anonymous.png',
    'resources/images/iguru-logo.png',
    'resources/images/Insight Guru.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

// Listen for activate event, set callback
self.addEventListener('activate', function(event) {
    console.log('activate');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response || fetchAndCache(event.request);
            })
    );
});


function fetchAndCache(url) {
    return fetch(url)
        .then(function(response) {
            // Check if we received a valid response
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return caches.open(CACHE_NAME)
                .then(function(cache) {
                    cache.put(url, response.clone());
                    return response;
                });
        })
        .catch(function(error) {
            console.log('Request failed:', error);
            // You could return a custom offline 404 page here
        });
}
