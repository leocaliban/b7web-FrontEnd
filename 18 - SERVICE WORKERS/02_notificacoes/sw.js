self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {

});

self.addEventListener('push', event => {

    console.log(event.data.text());
    event.waitUntil(
        self.registration.showNotification(
            'Título da notificação',
            {
                body: event.data.text()
            }
        )
    );
});