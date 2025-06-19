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
/*
    //crear un programa para el cambio de divisas
    function cambioDeDivisas(){
        let dollar = parseFloat(document.getElementById('peso').value);
        let peso = 20.00;
        console.log(dollar * peso);
    }
*/

/*
//agregar frutas a un array
function agregarFrutas(){
    let frutas = [];
        frutas = prompt('agrega un fruta de tu agrado');
        console.log(frutas);
    let opcion = prompt('Desea agregar mas frutas');
        if(opcion == "si"){
            agregarFrutas();
        }
}
agregarFrutas();
*/

/*
// crear un array de 5 colores que muestre el 3er color

let arrayDeColores = ['red', 'yellow', 'green', 'gray', 'brown'];
console.log(arrayDeColores[2]);

*/

/*
//A array de numero agregar un numero al final , uno al princio y eliminar el ultimo

let arrayDeNumeros = [1,2,3];
    arrayDeNumeros.push(4); //para agregar al final
    arrayDeNumeros.unshift(0); //agregar al inico
    arrayDeNumeros.pop(); //eliminar el ultimo
        console.log(arrayDeNumeros);
*/

/*
//crear un array con numero de calificaciones y sacar el promedio de eso
let arrayCalificaciones = [9,8,7,9,8,5,9];
let i = 0;
let promedio = 0;
function sacarPromedio(){
    if ( i != arrayCalificaciones.length){
        promedio = promedio + arrayCalificaciones[i];
        i++;
        sacarPromedio();
    }else{
        promedio = promedio/arrayCalificaciones.length;
        console.log(promedio);
    }
}
sacarPromedio();
*/


//Crea un array de nombres. Pide al usuario un nombre con prompt. Indica si el nombre está en el array o no.
let arrayNombres = ['santiago', 'miguel', 'carlos', 'julio cesar', 'ruben'];
let nombreUsuario = prompt('ingresa un nombre para revisarlo en la base de datos');
let i = 0;
 function revisarNombres(){
    if(nombreUsuario != arrayNombres[i]){
        i++;
        revisarNombres();
    }else{
        console.log(arrayNombres[i]);
    }
 }
 revisarNombres();