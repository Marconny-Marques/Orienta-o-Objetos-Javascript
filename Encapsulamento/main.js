const Saldo = require('./carteiraDigital');
const titular1 = new Titular('Junior');
const saldo1 = new Saldo(1000);

console.log(`O saldo de ${titular1} é ${saldo1}`);