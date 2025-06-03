
function asingnarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario (){
    alert("click desde el boton");
}

asingnarTextoElemento('h1', 'juego del numero secreto');
asingnarTextoElemento('p', 'Indica un numero del 1 al 10')