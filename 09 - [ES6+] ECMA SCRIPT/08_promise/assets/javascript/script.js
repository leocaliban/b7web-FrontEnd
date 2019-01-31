function enviar() {
    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Sucesso!');
        }, 3000);
    });

    return promise;
}

enviar()
    .then((response) => {
        console.log(response);
    });