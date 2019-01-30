$(function () {

    $('.hellobar').slideDown();

    $('.hellobar span').bind('click', function (e) {
        $('.hellobar').slideUp();
    });

    
    $('#bt1').bind('click', function (e) {
        $('#div1').slideUp();
    });

    $('#bt2').bind('click', function (e) {
        $('#div2').slideToggle();
    });

    $('#bt3').bind('click', function (e) {
        $('#div3').slideToggle('fast');
    });

});