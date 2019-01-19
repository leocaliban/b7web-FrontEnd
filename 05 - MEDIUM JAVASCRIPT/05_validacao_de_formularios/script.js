function validar() {
    
    var valor = document.getElementById('numero').value;

    if (valor.lenght > 2) {
        console.log('maior');
        return false;
    }
    else {
        console.log('menor');
        return true;
    }
}