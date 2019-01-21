$(function () {

    // Evento de tecla pressionada
    $('#nome').bind('keydown', function (e) {
        console.log('Alguma tecla foi pressionada');
    });

    // Evento de tecla pressionada e solta
    $('#nome').bind('keyup', function (e) {
        // Informa o código da tecla pressionada
        console.log(e.keyCode);

        if(e.keyCode == 13){
            console.log('A tecla ENTER foi pressionada!');
        }
    });

});