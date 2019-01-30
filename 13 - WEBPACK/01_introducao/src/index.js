import $ from 'jquery';
import './css/style.css';
import galeria from './images/01.jpg';

$(function () {
    console.log('Teste');

    $('#botao').on('click', function () {
        $('h1').html('Teste realizado com sucesso!');
        $('h1').addClass('texto');

        $('#foto').attr('src', galeria);
    });
});

