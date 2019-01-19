$(function () {
    // Atribuições
    $('a').attr('href', 'https://www.google.com.br/');
    $('a').attr('class', 'red');

    // Adicionando mais de um atributo
    $('img').attr('width', '100').attr('border', '3');

    // Para ler o atributo
    var a = $('img').attr('src');
    console.log(a);
});