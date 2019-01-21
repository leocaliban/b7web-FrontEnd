$(function () {

    // Outra maneira de definir evento de click
    // $('button').bind('click', function(){})
    $('button').click(function () {
        if ($('h1').hasClass('fundo')) {
            $('h1').removeClass('fundo');
        } else {
            $('h1').addClass('fundo');
        }

        // Para ações de ativar ou desativar usar apenas
        // $('h1').toggleClass('fundo'); para realizar a alternância

    });
    
    $('button').mouseover(function(){
        $(this).addClass('fundo');
    });

    $('button').mouseout(function(){
        $(this).removeClass('fundo');
    });
});