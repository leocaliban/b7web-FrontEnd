function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

if ('serviceWorker' in navigator && 'Notification' in window) {
    window.onload = function () {
        navigator.serviceWorker.register('/sw/sw.js')
            .then(function () {
                console.log('ServiceWorker registrado!');
            }, function (e) {
                console.log('Ocorreu um erro no registro do ServiceWorker: ');
                console.log(e);
            });

        navigator.serviceWorker.ready.then((registration) => {

            /**
                 registration.pushManager.getSubscription().then((subscription) => {
                     subscription.unsubscribe().then(() => {
                         console.log('Inscrição removida.');
                    }).catch(() => {
                        console.log('Erro ao remover inscrição.');
                    });
                });            
             */

            var appCodeKey = 'BGQSosovSBKZRukETWYBw0caRqrD4qgvdJzZy_YHTtUi8fAXh3gcCo4GuePZSw9wl7YnzkC0w5SGfzXO1IsVI_c';

            var options = {
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(appCodeKey)
            };

            registration.pushManager.subscribe(options)
                .then((pushSubscription) => {

                    console.log(JSON.stringify(pushSubscription));

                    fetch(
                        'https://site.com.br/notificacao/registro',
                        {
                            method: 'POST',
                            body: JSON.stringify(pushSubscription)
                        }).then((response) => {
                            console.log(response);
                        }).catch((error) => {
                            console.log(error.message);
                        });

                }).catch((error) => {
                    console.log(error.message);
                });
        });

        Notification.requestPermission((permission) => {
            if (permission == 'granted') {
                console.log('PERMITIDO');
            } else {
                console.log('NEGADA.');
            }
        });
    };
}