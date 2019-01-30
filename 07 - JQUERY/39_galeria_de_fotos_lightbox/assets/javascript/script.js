$(function () {

    $('a.galeria').bind('click', function (e) {
        var imagem = $(this).find('img').attr('src');

        $('.boximage img').attr('src', imagem);
        $('.box, .boximage').fadeIn('fast');
    });

    $('.box, .boximage button').bind('click', function (e) {
        $('.box, .boximage').fadeOut('fast');
    });
});
