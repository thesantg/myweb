let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto;
     return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario == numeroSecreto){
     asignarTextoElemento('p',`Acertaste el numero en: ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `)
     document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
     if (numeroDeUsuario > numeroSecreto){
          asignarTextoElemento('p', 'El numero secreto es menor');
     }else{
          asignarTextoElemento('p', 'El numero secreto es mayor')
     }
     intentos++;
     limpiarCaja();

    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = "";
    //valorCaja.value = "";
}

function generarNumeroSecreto(){
     let numeroGnerado = Math.floor(Math.random()*numeroMaximo)+1;

     console.log(numeroGnerado);
     console.log(listaNumerosSorteados);

     //si el numero generado esta en la lista
     if(listaNumerosSorteados.length == numeroMaximo){
          asignarTextoElemento('p', 'Ya se sorteron todos los numeros posibles');
          }else{
               if(listaNumerosSorteados.includes(numeroGnerado)){
                    return generarNumeroSecreto();

               }else{
                    listaNumerosSorteados.push(numeroGnerado);
                    return numeroGnerado;
               }
          }
}
function condicionesIniciales(){
     asignarTextoElemento('h1', 'juego del numero secreto!');
     asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
     intentos = 1;
}

function reiniciarJuego(){
     //limpiar cja
     limpiarCaja();
     //indicar mensaje de intervalo de numeros
     //Generar eñ numero aleatorio
     //Inicializar el numero de intentos
     condicionesIniciales();
     //Deshabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled', 'true');
     
}
condicionesIniciales();