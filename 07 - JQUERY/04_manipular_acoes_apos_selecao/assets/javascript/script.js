$(function () {
    
    // Alterando conteúdo
    $('#teste').html('Texto alterado via JQuery :D');

    // verifica conteúdo
    var a = $('#teste').html();
    console.log(a);

    // Filtra a busca por elementos aninhados e aplica ações
    $('#teste2').find('button').addClass('red');
    $('#teste2').find('button').html('BOTÃO ALTERADO');
});