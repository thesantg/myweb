let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


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
    
    if(numeroDeUsuario === numeroSecreto){
        asingnarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1 ? 'vez' : 'veces')}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if( numeroDeUsuario > numeroSecreto){
            asingnarTextoElemento('p','El numero Secreto es menor');
        } else{
            asingnarTextoElemento('p', 'El numero Secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    let valorCaja =  document.querySelector('#valorUsuario');
    valorCaja.value = "";
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asingnarTextoElemento('h1', 'juego del numero secreto');
asingnarTextoElemento('p', 'Indica un numero del 1 al 10')