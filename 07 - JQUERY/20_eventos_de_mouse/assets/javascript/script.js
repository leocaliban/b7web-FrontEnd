$(function () {

    // Evento ao dar click
    $('.botao').bind('mousedown', function (e) {
        console.log('Cursor pressionado');
    });

    // Evento ao liberar cursor após o click
    $('.botao').bind('mouseup', function (e) {
        console.log('Cursor liberado');
    });

    // Evento de click completo [existe o dblclick para click duplo]
    $('.botao').bind('click', function (e) {
        console.log('CLICK');
    });

    // Evento ao mover o cursor sobre o elemento
    $('.botao').bind('mousemove', function (e) {
        console.log('Cursor movido sobre o elemento');
    });

    // Evento de cursor sobre o elemento
    $('.botao').bind('mouseover', function (e) {
        console.log('Cursor está em cima do elemento');
        $(this).addClass('bordas');
    });

    // Evento quando o cursor sai do elemento
    $('.botao').bind('mouseout', function (e) {
        console.log('Cursor saiu de cima do elemento');
        $(this).removeClass('bordas');
    });

});