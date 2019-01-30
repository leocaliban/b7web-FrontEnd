$(function () {

    // Função de scroll
    $('#div').bind('scroll', function(){
        console.log('Scroll');
        $(this).css('color', 'purple').css('background', '#ccc');
    });


    // Função de resize
    $(window).bind('resize', function (e) {
        console.log('A tela foi redimensionada!');
    });
});