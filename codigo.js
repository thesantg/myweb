let triunfo = 0;
let perdidas = 0;
while (triunfo < 3 && perdidas < 3){
    let jugador = prompt("elije 0 para pierda, 1 papel y 2 tijera");
    let pc = Math.floor(Math.random()*3);
//ifs para ver que elije el jugador
    if (jugador == 0){
        alert("elejiste pierdra");
    }
    else if (jugador == 1){
        alert("elejiste papel");
    }
    else if (jugador == 2){
        alert("elejiste tijera");
    }else{
        alert("opcion incorrecta");
    }
//ifs para ver que elije PC
    if (pc == 0){
        alert("PC elije piedra");
    }
    else if(pc == 1){
        alert("PC elije papel");
    }
    else if(pc == 2){
        alert("PC elije tijera");
    }
    // COMBATE
    if (jugador == pc){
        alert("Empate");
        
    }
    else if(jugador == 0 && pc == 2){
        alert("Ganaste");
            triunfo++;
    }
    else if (jugador == 1 && pc == 0){
        alert("Ganaste");
            triunfo++;
    }
    else if(jugador == 2 && pc == 1){
        alert("Ganaste");
            triunfo++;
    }else{
        alert("Perdiste");
            perdidas++;
    }
}
alert("ganaste " + triunfo + " perdiste " + perdidas);