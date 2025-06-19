let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

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
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //ya se sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asingnarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')

    } else {

    //si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
    asingnarTextoElemento('h1', 'juego del numero secreto');
    asingnarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`)
    //generar el numero aleatorio
        numeroSecreto = generarNumeroSecreto();
    //inicializar el intentos
        intentos = 1;
}

function reiniciarJuego() {
    //lipiar caja
        limpiarCaja();
    //indicar mensajes de intervalo de numeros
        condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
        document.querySelector('reiniciar').setAttribute('disable', 'true');
}
condicionesIniciales();