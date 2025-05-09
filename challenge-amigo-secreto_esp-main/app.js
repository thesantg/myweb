// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo(){
    input = document.getElementById("amigo");
    nombre = input.value;
    if (nombre === ""){
        alert("agregaste texto vacio, por favor agregar un amigo")
    }else{
        amigo.push(nombre);
        console.log(amigo)
        input.value = "";
    }

}
agregarAmigo();