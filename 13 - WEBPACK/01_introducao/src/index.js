import $ from 'jquery';
import './css/style.css';

$(function () {
    console.log('Teste');

    $('#botao').on('click', function () {
        $('h1').html('Teste realizado com sucesso!');
        $('h1').addClass('texto');
    });
});

