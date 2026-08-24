const Pessoa = require('./Pessoa');
const p1 = new Pessoa(70, 1.6);

console.log('O seu IMC é: ', p1.imc());
console.log('Isso se enquadra em: ', p1.classificar());
