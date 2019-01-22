import $ from 'jquery';

$(function () {
    console.log('Teste');

    $('#botao').on('click', function () {
        $('h1').html('Teste realizado com sucesso!');
    });
});

