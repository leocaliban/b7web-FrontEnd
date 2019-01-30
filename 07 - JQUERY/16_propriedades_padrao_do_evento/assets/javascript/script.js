$(function () {

    $('#botao').click(function (e) { 

        // cancela o evento padrao de envio de formulario
        e.preventDefault();

        // saber o tipo de evento realizado
        console.log(e.type);
        $('h2').toggleClass('enviado');
        
    });

});