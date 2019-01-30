$(function () {

    // esconde o elemento [para exibir usar show]
    // $('.div').hide('slow');
    // slow indica a velocidade da transição [slow - fast]

    $('.botao').bind('click', function (e) {
        $('.div').toggle('slow');
    });

});