'use strict'

console.clear();

// CANCELAR CON clearTimeout

// ESTA FUNCION ES PARA PODER CANCELAR LA ACCION


// EVENTOS

var cancelEvent = document.querySelector("#cancelEvent");
cancelEvent.addEventListener('click', () =>{

    cancelarEvento();

})


//FUNCIONES
function cancelarEvento(){

    var temporizadorID = setTimeout(() => alert("Evento que no paso"), 3000);
    alert(temporizadorID);

    clearTimeout(temporizadorID);
    alert(temporizadorID);

}
