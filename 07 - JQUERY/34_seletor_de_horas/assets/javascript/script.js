$(function () {

    var horaSelecionada;

    $('input').bind('focus', function (e) {
        var posicao = $(this).offset();
        var width = $(this).width();

        $('.hora-selecao').css('left', posicao.left + width + 5);
        $('.hora-selecao').css('top', posicao.top);

        $('.hora-selecao').fadeIn();

        horaSelecionada = $(this);
    });

    $('input').bind('blur', function (e) {
        setTimeout(() => {
            $('.hora-selecao').hide();
        }, 200);

    });

    $('.hora-selecao button').bind('click', function (e) {
        var hora = $(this).html();
        horaSelecionada.val(hora);
    });

});