// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let nombre;

function agregarAmigo() {
    //valor ingresado "amigo" como variable "nombre"
    nombre=document.getElementById('amigo').value;
    if (nombre=='') {
        alert ("Por favor, ingrese nombre");
    } else {
        agregarLista();
        limpiarCaja();
        enlistadoAmigos();
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value='';
}

function agregarLista() {
    amigos.push(nombre);
}

function enlistadoAmigos (){
    //enlista a mostrar
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML=""; //limpia la lista
    for (let i=0;i<amigos.length;i++) {
        let li =document.createElement("li");
        li.textContent=amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos==[]){
        alert ("La lista de amigos esta vacía");
    } else {
        let numeroMaximo=amigos.length;
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)
        //mostrar resultado
        let nombreSorteado=document.getElementById('resultado');
        nombreSorteado.innerHTML=amigos[numeroGenerado];

    }
}