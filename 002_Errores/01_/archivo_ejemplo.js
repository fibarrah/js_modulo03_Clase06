'use strict'

console.clear();

// MANEJO DE ERRORES


// EVENTOS
var btn_Error = document.querySelector("#btn_Error");
btn_Error.addEventListener('click', () =>{

    //console.log(primerError());

    // UN ERROR DETALLADO
    console.log(primerError().stack);

})

// FUNCIONES

function primerError(){
    const miError = new Error('Hubo un error');
    return miError;
}