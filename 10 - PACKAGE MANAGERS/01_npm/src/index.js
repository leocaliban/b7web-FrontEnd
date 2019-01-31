import moment, { locale } from 'moment';
// ou >>> const moment = require('moment');

locale('pt-br');

let dia = moment().format('dddd');

console.log(`O dia atual é: ${dia}`);