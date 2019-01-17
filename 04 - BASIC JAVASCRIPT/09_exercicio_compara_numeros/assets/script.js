function verificar(){
    var n1 = document.getElementById('n1').innerHTML;
    var n2 = document.getElementById('n2').value;

    if(n1 == n2){
        console.log("Números iguais!");
    }
    else{
        console.log("Números diferentes!");
    }
    resetar();
}

function resetar(){
    document.getElementById('n2').value = "";
    document.getElementById('n1').innerHTML = Math.floor(Math.random() * 10);
}