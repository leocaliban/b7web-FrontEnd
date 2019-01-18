var pontos = 0;
var intervalo = 1000;

function criarBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");    

    var posicaoX = Math.floor(Math.random() * 500);
    var posicaoY = Math.floor(Math.random() * (400 - 100) + 100);
    bola.setAttribute("style", "left:" + posicaoX + "px;top:" + posicaoY + "px;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(elemento){
    pontos ++;
    document.getElementById("pontos").innerHTML = pontos;

    document.body.removeChild(elemento);
    
    aumentarBarra();
    
}

function iniciar(){
    setInterval(criarBola, intervalo);
}

function aumentarBarra(){
    var barra = document.createElement('div');
    barra.removeAttribute('class', 'esconder');
    barra.setAttribute('class', 'barra');
    document.body.appendChild(barra);

}