$(function () {

    $('#senha').bind('keyup', function (e) {
        var txt = $(this).val();

        var forca = 0;

        if (txt.length > 6) {
            forca += 25;
        }

        var reg = new RegExp(/[a-z]/i);
        if (reg.test(txt)) {
            forca += 25;
        }

        var regNumber = new RegExp(/[0-9]/i);
        if (regNumber.test(txt)) {
            forca += 25;
        }

        var regCharSpecial = new RegExp(/[^a-z0-9]/i);
        if (regCharSpecial.test(txt)) {
            forca += 25;
        }

        if (forca == 0) {
            $('#bar').css('width', '0%').css('background-color', 'transparent');
            $('#bar').html('0%');
        } else if (forca <= 25) {
            $('#bar').css('width', '25%').css('background-color', 'rgb(224, 45, 21)');
            $('#bar').html('25%');
        } else if (forca > 25 && forca <= 50) {
            $('#bar').css('width', '50%').css('background-color', 'rgb(202, 148, 31)');
            $('#bar').html('50%');
        } else if (forca > 50 && forca <= 75) {
            $('#bar').css('width', '75%').css('background-color', 'rgb(165, 202, 31)');
            $('#bar').html('75%');
        } else if (forca > 75) {
            $('#bar').css('width', '100%').css('background-color', 'rgb(71, 202, 31)');
            $('#bar').html('100%');
        }

        $('#forca').html('Força: ' + forca);
    });
});
