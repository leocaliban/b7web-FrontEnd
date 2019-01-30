$(function () {

    $('#bt1').bind('click', function () {
        $('#bt2').trigger('click');
    });

    $('#bt2').bind('click', function () {
        console.log('Botão 2 acionado');
    });

});