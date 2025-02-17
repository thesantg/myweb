let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafio";

function botonclick (){
    console.log("el boton fue clicado");
}
 function ciudadBrasil (){
    let ciudad = prompt("¿dime una ciudad de Brasil?");
    alert(`estuve en ${ciudad}`);
 }
 function mensajeGay(){
    alert("Yo amo js");
 }
 function sumas (){
    let num1 = parseInt(prompt("ingresa un numero a sumar"));
    let num2 = parseInt(prompt("Ingresa un segundo numero a sumar"));
    alert(`${num1} + ${num2} = ${num1+num2}`);
 }