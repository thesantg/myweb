let numeroSecreto = generarNumeroSecreto();



function asingnarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario === numeroSecreto);
    

    return;
}



function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asingnarTextoElemento('h1', 'juego del numero secreto');
asingnarTextoElemento('p', 'Indica un numero del 1 al 10')