// Objeto pessoas com atributos pré-definidos
function Pessoa() {
    this.nome = "Aline";
    this.peso = 50;
    this.idade = 20;

    // Método da classe
    this.dormir = function () {
        console.log('Dormindo... zzzzzzzzzz');
    };
}

// Instanciação de uma pessoa
var pessoa = new Pessoa();

// Modificação de atributos da pessoa
pessoa.nome = "Amanda";


