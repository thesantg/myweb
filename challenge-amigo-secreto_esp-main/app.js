// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigo = []

function agregarAmigo(){
    let inputDeamigo = document.getElementById('amigo');
    let amigojs = inputDeamigo.value;
    if (amigojs=== ""){
        alert('ingrese un amigo, campo de texto esta vacio')
    }else{
        arrayAmigo.push(amigojs);
        console.log(arrayAmigo);
    }


}
agregarAmigo()