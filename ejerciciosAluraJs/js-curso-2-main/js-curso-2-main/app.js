/*let tituloh1 = document.querySelector("h1");
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
} */


/* ejericio una funcion de suma con retorno de resultados

function sumando (a,b){
    return (a+b);
}
console.log(sumando(2, 5)); */


/*ejercio de una funcion que devuelva un mensaje con nombre de un prompt
function Mensaje(nombre) {
    return `Hola ${nombre} Bienvenido`;
}
console.log(Mensaje("santiago"));*/



//calcular imc
/*
function calcularIMC(){
    let pesoIMC = parseInt(document.getElementById('peso').value);
    let alturaIMC = parseInt(document.getElementById('altura').value);
        console.log(pesoIMC);
        console.log(alturaIMC);
    let imc = (alturaIMC * alturaIMC) / pesoIMC;
    let parrafo = document.querySelector('p');
    parrafo.innerHTML = imc;
}
*/

/*
//calcular el valor factorial

function sacarFactorial() {
let numero = parseInt(document.getElementById('peso').value);
let factorial = 1;

    if(numero == 0 || numero == 1){
        factorial = 1;
        console.log(factorial);

    }else{

        while (numero > 0) {
            factorial = factorial * numero;
                numero--;
                console.log(factorial);
        }
        console.log(factorial);
    }
}
*/

function cambioDeDivisas(){
    let dollar = parseFloat(document.getElementById('peso').value);
    let peso = 20.00;
    console.log(dollar * peso);
}