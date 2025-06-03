let tituloh1 = document.querySelector("h1");
tituloh1.innerText = "Hora del desafio";
function clickeado() {
    console.log("el boton fue clickeado");
}

function mensajeCiudad() {
    let mensaje = prompt("menciona una ciudad de brasil");
    alert(`estuve en ${mensaje} y me acorde de ti`);
}

function alertaMensaje(){
    alert("yo amo JS");
}

function Lasuma() {
    let valor1 = parseInt(prompt("ingresa un numero"));
    let valor2 = parseInt(prompt("ingresa un segundo numero"));
    alert(`la suma de ${valor1} + ${valor2} = ${(valor1+valor2)}`)
}