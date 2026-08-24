// Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
// Arquivo criado dentro da pasta "objetos" do projeto
// não deve executar o arquivo diretamente com node

class Pessoa {
  constructor(peso, altura) {
    this.peso = peso;
    this.altura = altura;
  }

  imc() {
    // índice de massa corpórea
    let imc = this.peso / (this.altura * this.altura);
    return imc;
  }

  //console.log('O seu indice de massa corporal é ', imc);

  classificar() {
    const valorImc = this.imc();

    if (valorImc < 18.5 && valorImc <= 24.9) return 'Abaixo do peso';
    if (valorImc < 25.0 && valorImc <= 29.9) return 'Peso normal';
    if (valorImc < 30.0 && valorImc <= 34.9) return 'Sobrepeso (pré obesidade)';
    if (valorImc < 35.0 && valorImc <= 39.9) return 'Obesidade';
    if (valorImc < 40.0) return 'Obesidade grau II';
  }
}

module.exports = Pessoa;
