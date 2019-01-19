function enviar() {
    var area = document.getElementById('area');
    var texto = prompt('Qual sua idade?');

    area.innerHTML = texto;
}