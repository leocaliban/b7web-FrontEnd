class Pessoa {
    constructor(nome, sexo) {
        this.nome = nome;
        this.sexo = sexo;
    }

    falar(som = 'Silêncio') {
        return som;
    }

    get dados() {
        return `Nome: ${this.nome}, Sexo: ${this.sexo}`;
    }
}

export class Funcionario extends Pessoa {

    constructor(nome, sexo, salario) {
        super(nome, sexo);
        this.salario = salario;
    }

    falar(som = 'Agrrrr') {
        return som;
    }

    get dados() {
        return `Nome: ${this.nome}, Sexo: ${this.sexo}, Salário: ${this.salario}`;
    }
}