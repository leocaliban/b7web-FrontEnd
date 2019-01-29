import $ from 'jquery';
import './sass/style.scss';
import Botao from './components/button/botao.js';

$(function () {
    let botao = new Botao();
    botao.setTitle('Salvar');
    botao.setClick(function(){
        console.log('Botão clicado!');
    });

    $('.content').html(botao.render());
});

