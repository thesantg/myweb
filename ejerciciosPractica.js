/*function iniciarJuego(){
    let boton_Selecionar = document.getElementById('botonseleccionar');
    boton_Selecionar.addEventListener('click', seleccionarAtaque);
}

function seleccionarAtaque(){
    ataquePiedra = document.getElementById('piedra');
    let ataqueJugador = document.getElementById('ataqueJugador');
    if(ataquePiedra.checked){
            ataqueJugador.innerHTML = 'piedra';
        }else if(ataquePapel = document.getElementById('papel').checked){
                ataqueJugador.innerHTML = 'Papel';
            }else if(ataqueTijera = document.getElementById('tijera').checked){
                ataqueJugador.innerHTML = 'tijera';
            }
    seleccionarAtaqueEnemigo();
}

function seleccionarAtaqueEnemigo(){
    ataqueEnemigo = aleatorio(3,1);
    let ataqueenemigoId = document.getElementById('ataqueEnemigoId');
    if(ataqueEnemigo == 1){
            ataqueenemigoId.innerHTML = 'piedra'
    }else if(ataqueEnemigo == 2){
            ataqueenemigoId.innerHTML = 'papel';
    }else if(ataqueEnemigo == 3){
            ataqueenemigoId.innerHTML = 'tijera';
    }
    
    combate();
}

function combate (){
    let resultadoCombate = document.getElementById('resultado_combate');
    if  (ataquePiedra.checked && ataqueEnemigo == 3){
        resultadoCombate.innerHTML = 'Ganaste 🎊'
    }else if(ataquePapel.checked && ataqueEnemigo == 1){
        resultadoCombate.innerHTML = 'Ganaste 🎊';
    }else if(ataqueTijera.checked && ataqueEnemigo == 2){
        resultadoCombate.innerHTML = 'Ganaste 🎊';
    }else{
        resultadoCombate.innerHTML = 'Empate ⚔';
    }
}

function aleatorio(max, min){
 return Math.floor(Math.random()*(max - min +1) + min);
}


window.addEventListener('load', iniciarJuego);

*/


function retornarNumeroMayor (numero){
    return Math.max(...numero);
}
let arreglo = [10,9,8,4,5];
console.log(retornarNumeroMayor(arreglo));