self.addEventListener('install', (event) => {

    console.log('Evento de install');

    self.skipWaiting();

    event.waitUntil(
        caches.open('teste-v1').then((cache) => {
            cache.add('pizza.jpg');
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Evento de Activate');
});

self.addEventListener('fetch', (event) => {

    var url = new URL(event.request.url);

    if (url.origin == location.origin && url.pathname == '/sw/gg.png') {
        event.respondWith(caches.match('pizza.jpg'));
    }
});