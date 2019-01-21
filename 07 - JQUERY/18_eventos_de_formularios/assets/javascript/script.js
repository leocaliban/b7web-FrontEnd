$(function () {

    // Evento de submit
    $('#form').bind('submit', function (e) {
        e.preventDefault();
        console.log('Fonrmulário enviado!');
    });

    // Evento de seleção
    $('#nome').bind('select', function (e) {
        console.log('Texto do Campo selecionado');
    });

    // Evento de foco
    $('#nome, #email').bind('focus', function (e) {
        $(this).addClass('bordas');
    });

    // Evento de desfoco
    $('#nome, #email').bind('blur', function (e) {
        $(this).removeClass('bordas');
    });

    // Evento de troca do select
    $('#idade').bind('change', function (e) {
        console.log('Valor selecionado: '+ $(this).val());
    });
});