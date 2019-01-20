$(function () {

    // Adiciona classe ao elemento
    $('h1').addClass('fundo');


    // Para remover uma classe
    // $('h1').removeClass('fundo');

    if ($('h1').hasClass('fundo')) {
        console.log('Esse elemento possui a classe FUNDO.');
    } else {
        console.log('Esse elemento NÃO possui a classe FUNDO.');
    }

    // adicionando styles css nos elementos
    $('h1').css('color', '#fff');
    $('button').css('border', '2px solid #666666').css('color', 'green');
});