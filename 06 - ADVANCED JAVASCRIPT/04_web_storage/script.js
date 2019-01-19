// SessionStorage reseta ao fechar navegador

if (typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt('Qual o seu nome?');
}

var nome = localStorage.nome;

document.getElementById('info').innerHTML = nome;

function limpar(){
    localStorage.removeItem('nome');
}