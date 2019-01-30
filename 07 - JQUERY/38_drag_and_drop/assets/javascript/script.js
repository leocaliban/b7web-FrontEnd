$(function () {

    $('#objeto').bind('mousedown', function (e) {
        $('#objeto').bind('mousemove', function (e) {
            var posicaoX = e.originalEvent.pageX;
            var posicaoY = e.originalEvent.pageY;

            var width = $(this).width();
            var height = $(this).height();

            $(this).css('left', (posicaoX - (width / 2)) + 'px');
            $(this).css('top', (posicaoY - (height / 2)) + 'px');
        });
    });

    $('#objeto').bind('mouseup', function (e) {
        $('#objeto').unbind('mousemove');
    });
});
