var vez = 'O';

function atualizarPlacar() {
    if (vez == 'O') {
        $('.placar img').attr('src', 'assets/images/o.png');
    } else {
        $('.placar img').attr('src', 'assets/images/x.png');
    }
}

function verificarCampeao() {
    var a1 = $('.a1').attr('data-marcado');
    var a2 = $('.a2').attr('data-marcado');
    var a3 = $('.a3').attr('data-marcado');

    var b1 = $('.b1').attr('data-marcado');
    var b2 = $('.b2').attr('data-marcado');
    var b3 = $('.b3').attr('data-marcado');

    var c1 = $('.c1').attr('data-marcado');
    var c2 = $('.c2').attr('data-marcado');
    var c3 = $('.c3').attr('data-marcado');

    var ganhador = '';

    for (var index = 0; index <= 1; index++) {
        var op;
        if (index == 0) {
            op = 'O';
        } else {
            op = 'X';
        }

        if (a1 == op && b1 == op && c1 == op) {
            ganhador = op;
        }
        else if (a2 == op && b2 == op && c2 == op) {
            ganhador = op;
        }
        else if (a3 == op && b3 == op && c3 == op) {
            ganhador = op;
        }
        else if (a1 == op && a2 == op && a3 == op) {
            ganhador = op;
        }
        else if (b1 == op && b2 == op && b3 == op) {
            ganhador = op;
        }
        else if (c1 == op && c2 == op && c3 == op) {
            ganhador = op;
        }

        else if (a1 == op && b2 == op && c3 == op) {
            ganhador = op;
        }

        else if (c1 == op && b2 == op && a3 == op) {
            ganhador = op;
        }

    }

    if (ganhador != '') {
        if (ganhador == 'O') {
            alert('"O" foi o vencedor');
        }
        else {
            alert('"X" foi o vencedor');
        }

        $('.area').html('');
        $('.area').attr('data-marcado', '');
    }

    else if (a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3) {
        alert('EMPATE!!!');
        $('.area').html('');
        $('.area').attr('data-marcado', '');
    }
}

$(function () {

    atualizarPlacar();

    $('.area').bind('click', function (e) {
        if ($(this).find('img').lenght == undefined && $(this).attr('data-marcado') == '') {
            if (vez == 'O') {
                $(this).html('<img src="assets/images/o.png" />');
                $(this).attr('data-marcado', 'O');
                vez = 'X';
            } else {
                $(this).html('<img src="assets/images/x.png" />');
                $(this).attr('data-marcado', 'X');
                vez = 'O';
            }
            atualizarPlacar();

            verificarCampeao();
        }
    });

});
