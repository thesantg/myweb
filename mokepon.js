function cargarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota"); /*el document.getElementById("id") se utiliza para manipular un elemento de html por su id */
        botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador); /*ahora que vinculamos el html con el js y con la variable "botonMascotaJugador ahora hay que darle una funcion"*/
/*el .addeventListener("evento", "que va hace el elemento") en esta caso el eventoes "clic" y lo que hace es llamar una funcion */


}
function seleccionarMascotaJugador (){
    alert("funciona");
}
window.addEventListener("load", cargarJuego); /*lo que case el evento "load* es lo mismo que el defer en la etiqueta script, carga el js asta que el html y el css an cargado*/