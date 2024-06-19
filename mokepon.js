function cargarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota"); /*el document.getElementById("id") se utiliza para manipular un elemento de html por su id */
        botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador); /*ahora que vinculamos el html con el js y con la variable "botonMascotaJugador ahora hay que darle una funcion"*/
/*el .addeventListener("evento", "que va hace el elemento") en esta caso el eventoes "clic" y lo que hace es llamar una funcion */
/*ventos que podemos escuchar con: addEventListener("")
    -Blur = cuando el elemento pierde el foco
    -click = el usuarop jace clic sobre el elemento
    -dbclick = el usuario hace doble clic sobre el elemento
    -focus = el elemento gana el foco
    -keydown = El usuario presiona una tecla
    -keypress = el usuario presiona una tecla y la mantiene pulsada
    -keyup = el usuario libera la tecla
    -mousedown = el usuairo presiona el boton del raton en un elemento

     */

}
function seleccionarMascotaJugador (){
    let inputHipodoge = document.getElementById("hipodoge").checked; //aquie lo que hacemos el darle una variable js al lemento getElementByID().checked que este nos va a arrajar un true o false si se esta seleccionado el elemento
    let inputCapipepo = document.getElementById("capipepo").checked;
    let inputRatigueya = document.getElementById("ratigueya").checked;
    let spamMascotaJugador = document.getElementById("mascota-jugador");
    
    if(inputHipodoge){
        spamMascotaJugador.innerHTML = "Hipodoge"; //o que hacemos es cambiar la informacion dentro del html por el innerHTML
        }else if(inputCapipepo){
            spamMascotaJugador.inerHTML = "Capipepo"
            }else if(inputRatigueya){
                spamMascotaJugador.innerHTML = "RAtigueya"
            }else{
                alet("Selecciona una mascota");
            }
}
window.addEventListener("load", cargarJuego); /*lo que case el evento "load* es lo mismo que el defer en la etiqueta script, carga el js asta que el html y el css an cargado*/