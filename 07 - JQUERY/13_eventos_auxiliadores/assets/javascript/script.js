$(function () {

    /* Função extendida 
        $('button').mouseover(function(){
            $(this).addClass('fundo');
        });
    
        $('button').mouseout(function(){
            $(this).removeClass('fundo');
        });
    */

    /** Função diminuida utilizando o hover 
    $('button').hover(function () {
            // over
            $(this).addClass('fundo');
        }, function () {
            // out
            $(this).removeClass('fundo');
        }
    );
    */

    // Função simplificada utilizando hover+toggle
    $('button').hover(function () {
        // aplica a classe antes
        $(this).toggleClass('fundo');
    });

});