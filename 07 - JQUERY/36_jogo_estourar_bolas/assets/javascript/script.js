var placar = 0;


function adicionarBola() {
    var posicaoX = Math.floor(Math.random() * 350);
    var posicaoY = Math.floor(Math.random() * 400);

    var bolaFundo = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    var bola = $('<div class="bola bola' + bolaFundo + '"></div>');
    bola.css('left', posicaoX + 'px');
    bola.css('top', posicaoY + 'px');
    bola.bind('click', function () {
        placar++;
        $(this).fadeOut('fast');
        updatePlacar();
    });

    $(bola).appendTo('#campo');
    // Outra forma selecionando o elemento primeiro
    // $(document.body).append('<div class="bola"></div>');
}

function updatePlacar() {
    $('#placar').html(placar);
}

$(function () {

    $('#comecar').bind('click', function (e) {
        setInterval(adicionarBola, 1000);
        $(this).attr('disabled', 'disabled');
    });
});