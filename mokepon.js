let ataqueJugador;
let ataqueEnemigo;
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
    let botonFuego = document.getElementById("boton-fuego");
        botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById("boton-agua");
        botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById("boton-tierra");
        botonTierra.addEventListener('click', ataqueTierra);
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

                spamMascotaJugador.innerHTML = "Ratigueya"
            }else{

                alet("Selecciona una mascota");
            }

            SeleccionarMascontaEnemigo()
}
function SeleccionarMascontaEnemigo (){

    let mascotaAleatoria = aletorio(1,3);
    let spamMascotaEnemigo = document.getElementById("mascota-enemigo");
        if(mascotaAleatoria == 1){
            spamMascotaEnemigo.innerHTML("Hipodoge");
            }else if(mascotaAleatoria == 2){
                spamMascotaEnemigo.innerHTML("Capipepo");
                }else{
                    spamMascotaEnemigo.innerHTML("Ratigueya");
                }
}
function ataqueFuego(){
    ataqueJugador = 'Fuego';
    ataqueAleatorioEnemigo();
}
function ataqueAgua(){
    ataqueJugador = 'Agua';
    ataqueAleatorioEnemigo();
}
function ataqueTierra(){
    ataqueJugador = 'Tierra';
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo(){
    let AtaqueAleatorio = aleatorio(1,3);

    if(AtaqueAleatorio == 1){
        ataqueEnemigo = 'Fuego';
        }else if(ataqueAleatorio == 2){
            ataqueEnemigo = 'Agua';
            }else{
            ataqueEnemigo = 'Tierra';
    }
    crearMensaje();
}

function combate(){
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate");
        }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
            crearMensaje('Ganaste');
            } else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
                crearMensaje('Ganaste');
                }else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Fuego'){
                    crearMensaje('Ganaste');
                }else{
                    crearMensaje('Perdiste');
                }

}
function crearMensaje(resultado){
let sectionMensajes = document.getElementById('mensajes');
 let parrafo = document.createElement('p'); //creamos una etiqueta que con el document.crearteElement('tag');
 parrafo.innerHTML = "tu mascota ataco con "+ ataqueJugador + " la mascota del enemigo ataco con "+ ataqueEnemigo+ " "+ resultado;
sectionMensajes.appendChild(parrafo); //aqui estamos metiendo el parrafo aun etiqueta section, con el id
}
function aleatorio (min, max){ 1
    return Math.floor(Math.random()*(max - min + 1) + min);
}
window.addEventListener("load", cargarJuego); /*lo que case el evento "load* es lo mismo que el defer en la etiqueta script, carga el js asta que el html y el css an cargado*/