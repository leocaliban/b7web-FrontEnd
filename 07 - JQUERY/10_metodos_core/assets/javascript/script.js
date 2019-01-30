$(function () {

    // retirando espaços e quebras de linha com trim
    var nome = $.trim($('teste').html());
    
    // Percorre cada elemento de uma coleção
    $('li').each(function(){
        console.log($(this).html());
    });

    // verificar tipo de uma variável
    console.log($.type(nome));
    console.log($.isNumeric(nome));
    console.log($.isArray(nome));
    console.log($.isFunction(nome));
    // em javascript >>> typeof VAR 
});