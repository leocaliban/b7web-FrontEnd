var slideItem = 0;
window.onload = function () {
    document.getElementById(slideItem).style.backgroundColor = "#d13030";
    setInterval(passarSlide, 10000);

    var slideWidth = document.getElementById("slide").offsetWidth;
    var objetos = document.getElementsByClassName("slide-content");

    for (var i = 0; i < objetos.length; i++) {
        objetos[i].style.width = slideWidth;
    }
}

function passarSlide() {

    var bolas = document.getElementsByClassName("bola");
    for (var i = 0; i < bolas.length; i++) {
        bolas[i].style.backgroundColor = "#ffffff";
    }

    var slideWidth = document.getElementById("slide").offsetWidth;
    if (slideItem >= 3) {
        slideItem = 0;
    }
    else {
        slideItem++;
    }

    document.getElementsByClassName("slide-area")[0].style.marginLeft = "-" + (slideWidth * slideItem);
    document.getElementById(slideItem).style.backgroundColor = "#d13030";
}

function mudarSlide(posicao) {

    var bolas = document.getElementsByClassName("bola");
    for (var i = 0; i < bolas.length; i++) {
        bolas[i].style.backgroundColor = "#ffffff";
    }
    slideItem = posicao;
    var slideWidth = document.getElementById("slide").offsetWidth;
    document.getElementsByClassName("slide-area")[0].style.marginLeft = "-" + (slideWidth * slideItem);

    document.getElementById(slideItem).style.backgroundColor = "#d13030";

}
