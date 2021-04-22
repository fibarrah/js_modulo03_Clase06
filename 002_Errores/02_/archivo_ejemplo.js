'use strict'

console.clear();

// MANEJO DE ERRORES TRY CATCH

// EVENTOS

var btn_Error1 = document.querySelector("#btn_Error1");
btn_Error1.addEventListener('click', () =>{

    Errores();

})

var btn_Error2 = document.querySelector("#btn_Error2");
btn_Error2.addEventListener('click', () =>{

    ErroresAnidados();

})

var btn_Error3 = document.querySelector("#btn_Error3");
btn_Error3.addEventListener('click', () =>{


    errorAsincrono();

})

// FUNCIONES

// PRIMER FUNCIONE

function Errores(){

    try {
        console.log("El cogido funciona");
        // GENERAR UN ERROR
        //throw new Error('Se carga un error en el codigo');

        //error.name
        //error.stack
        //error.message

    } catch (error) {
        console.log("Ocurrio un Error:" + error.message);
    }finally{


        console.log("El codigo se completo");
    }

}

// TRY ANIDADOS
function ErroresAnidados(){

    try{

        try {
            unaFuncion();
        } catch (e) {
            throw new Error(e);
        }

    }catch(e){
        console.log('Error: ' + e);
    }

}

// ERRORES ASINCRONOS
function errorAsincrono(){

    // TRY CATCH NO FUNCIONABA CON LA ASINCRONIA
    
    try {
        
        setTimeout(function() {
             varNODeclarada;
        }, 1000)

    } catch (error) {
        console.log('Hubo un error: ', error);
    }

}