//variables
let numeroSecreto = 6;
let numeroUsuario = prompt("ingresa el numero a adivinar entre 1 y 10");
console.log(numeroUsuario);
//Comparacion
if(numeroUsuario == numeroSecreto){
    //acertamos, fue verdadera la condicion
    alert(`acertaste el numero ${numeroUsuario}`); 
    //esto es un Template string, la convinacion de string con varibales usando comiillas  `${variable}`
}else {
    // la condicion no se cumplio
    alert("Lo siento, No acertaste el numero");
}
