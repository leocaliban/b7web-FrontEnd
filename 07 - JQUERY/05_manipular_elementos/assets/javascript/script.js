$(function () {

    // Substitui textos
    $('#teste').text('SUBSTITUIDO :D');

    // Insere valor no input
    $('input').val('Ecrever no input');

    // Adiciona um elemento depois do elemento buscado
    $('button').after("<img src='https://fotos.vivadecora.com.br/decoracao-casas-modernas-jardim-na-frente-da-casa-revistavd-173639-square_cover_xsmall.jpg'></img>");

    // Concatenando elementos ao final
    $('ul').append('<li>Item 05</li>');

    // Concatenando elementos no início
    $('ul').prepend('<li>Item 00</li>');
});