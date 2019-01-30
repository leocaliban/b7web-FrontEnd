/** Função normal 
 *  function somar(atual, x) {
        return atual + x;
    } 
*/

/** Função anônima 
 *  let total = numeros.reduce(function (atual, x) {
        return atual + x;
    });
*/


function adicionar(...numeros) {

    let total = numeros.reduce((atual, x) => atual + x); // << Arrow function

    console.log(total);
}

adicionar(5, 10);