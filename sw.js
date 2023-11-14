// sw.js

const CACHE_NAME = 'my-cache-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './src/main.ts', 
                './src/App.vue',
            ]);
        }),
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                }),
            );
        }),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Intenta recuperar la respuesta del caché
            return response || fetch(event.request).then((fetchResponse) => {
                // Si la solicitud es a una API del backend, la almacenamos en caché
                if (event.request.url.startsWith('http://127.0.0.1:9999')) {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                } else {
                    // Si no es una solicitud a la API del backend, simplemente devolvemos la respuesta
                    return fetchResponse;
                }
            }).catch(() => {
                console.error('Error fetching:', event.request.url);
                // Puedes devolver una respuesta predeterminada desde el caché en caso de error
                return caches.match('/offline.html');
            });
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
