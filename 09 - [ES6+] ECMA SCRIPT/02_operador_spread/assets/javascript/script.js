/* Spread com arrays */

let numeros = [1, 2, 3, 4, 5];

let novosNumeros = [...numeros, 6, 7, 8, 9, 10];

console.log(novosNumeros);

/**
 * Spread com objetos
 */

let usuario = {
    nome: 'Jack',
    sobrenome: 'Bauer',
    idade: 48
};

let novaInfoUsuario = {
    ...usuario,
    trabalho: 'UCT',
    cidade: 'Los Angeles'
};

console.log(novaInfoUsuario);