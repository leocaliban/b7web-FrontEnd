$(function () {


    $('#bt1').bind('click', function (e) {
        $('#div1').animate(
            {

                'margin-left': "+=50",
            }, {
                duration: 1000,
                start: function () {
                    $('#div1').removeClass('e');
                    $('#div1').addClass('d');
                }
            });
    });

    $('#bt2').bind('click', function (e) {
        $('#div1').animate(
            {

                'margin-left': "-=50",
            }, {
                duration: 1000,
                start: function () {
                    $('#div1').removeClass('d');
                    $('#div1').addClass('e');
                }
            });
    });
});
