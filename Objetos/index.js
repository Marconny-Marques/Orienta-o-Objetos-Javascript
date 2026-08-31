const Pessoa = require('./Pessoa');
const p1 = new Pessoa(70, 1.6);
const a = new Aluno();

const p1 = Pessoa.setNome("Maria");
const p1 = Pessoa.setEmail("Maria@gmail.com");
const p1 = Pessoa.setMatricula(2026001002);
console.log(`O seu IMC é: ${p1.imc().toFixed(2)}`);
console.log('Isso se enquadra em: ', p1.classificar());
