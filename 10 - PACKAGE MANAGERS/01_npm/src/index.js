const moment = require('moment');

moment.locale('pt-br');

let dia = moment().format('dddd');

document.getElementById('dia').innerHTML = `O dia atual é: ${dia}`;

console.log(`O dia atual é: ${dia}`);