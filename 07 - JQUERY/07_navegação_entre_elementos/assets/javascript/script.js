$(function () {

    // pega o elemento anterior [PAI]
    $('.filha').parent();

    // pega o primeiro elemento filho
    $('body').find('div').eq(0);

    // busca o elemento pai indicado mais próximo
    $('.filha').closest('.topo');

    // busca um elemento que não tenha grau de ligação com outro
    $('.filha').closest('.site').find('.sonteudo');


});