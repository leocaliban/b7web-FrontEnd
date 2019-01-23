$(function () {

    // fadeOut e fadeIn
    $('#btfadeout').bind('click', function (e) {
        $('#divfadeout').fadeOut();
    });

    $('#btfadeto').bind('click', function (e) {
        $('#divfadeto').fadeTo('slow', 0.3);
    });

    $('#bttoggle').bind('click', function (e) {
        $('#divtoggle').fadeToggle();
    });

});