// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos(){
    let input = document.getElementById('amigos')
    let inputAmigos = input.value.trim();

        if(inputAmigos == ""){

            alert('Error: "Por favor, inserte un nombre."');
            
        } else{
                amigos.push(inputAmigos);
                //console.log(inputAmigos);
                input.value = "";
                escribirAmigos();
                
        }
}

function escribirAmigos(){
    
    let inputLista = document.getElementById('listaAmigos');
    inputLista.innerHTML = "";
    amigos.forEach(inputAmigos =>{
        let li = document.createElement('li');
        li.textContent = inputAmigos;
        inputLista.appendChild(li);
    })

}

function sortearAmigo(){
        if(amigos.length > 1){
            let amigoSorteado = Math.floor(Math.random()*amigos.length);
            console.log(amigos[amigoSorteado]);
            let inputUl = document.getElementById('resultado');
          inputUl.innerText = amigos[amigoSorteado];
        }
    }