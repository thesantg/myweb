let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto;
     return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto){
     asignarTextoElemento('p','Acertaste el numero es: ')
    }else{
     if (numeroDeUsuario > numeroSecreto){
          asignarTextoElemento('p', 'El numero secreto es menor');
     }else{
          asignarTextoElemento('p', 'El numero secreto es mayor')
     }
    }
    return;
}

function generarNumeroSecreto(){
     return Math.floor(Math.random()*10)+1;
}


asignarTextoElemento('h1', 'juego del numero secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');