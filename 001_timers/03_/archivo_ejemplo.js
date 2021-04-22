'use strict'

console.clear();

// setInterval

// EVENTOS
var ponerIntervalo = document.querySelector("#ponerIntervalo");
ponerIntervalo.addEventListener('click', () => {

    tempNormal();

})

var ponerIntervaloAnidado = document.querySelector("#ponerIntervaloAnidado");
ponerIntervaloAnidado.addEventListener('click', () =>{

    tempAnidado();

})

// FUNCIONES

function tempNormal(){

    // VAMOS A REFERIRNOS CADA DOS SEGUNDOS A ESTE EVENTO
    var temporizadorID = setInterval(() => alert("Evento"), 3000);

    // DDESPUES DE 10 SEGUNDOS DETENER
    setTimeout(() => {
        clearInterval(temporizadorID);
        alert("Detenido")
    }, 10000);

}

function tempAnidado(){

    var tempID = setTimeout( function evento(){

        alert('Evento #1');
        tempID = setTimeout(evento, 2000);
    }, 2000);

}




