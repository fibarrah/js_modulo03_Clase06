'use strict'

console.clear();

// MANEJO DE ERRORES TRY CATCH


// EVENTOS

var btn_Error1 = document.querySelector("#btn_Error1");
btn_Error1.addEventListener('click', () =>{

    getErrorPromise();

})

var btn_Error2 = document.querySelector("#btn_Error2");
btn_Error2.addEventListener('click', () => {

    getErrorPromiseAsync();

})

// FUNCIONES

// FUNCIONES CON PROMESAS
function getErrorPromise(){

    // PRUEBA ERROR 1
    Promise.resolve('asyncfail')
        .then(respuesta => {
            throw new Error("Error N#1");
        })
        .then(respuesta => {
            console.log(respuesta);
        })
    // PRUEBA ERROR 2
        .catch(err => {
            throw new Error("Error N#2");
        })
        .then(respuesta => {
            console.log(respuesta);
        })
    // PRUEBA ERROR 3
        .catch(err => {
            console.log("Error N#3 Final")
        })

}


// FUNCION ASINCRONA USANDO TRY
async function getErrorPromiseAsync(){

    try {
        //PASO 1
        await Promise.reject("Error N#1");
        // PASO 2
        //await Promise.resolve("Error N#2");
    } catch (error) {
        console.log(error);
    }

    console.log("Este codigo tambien funciona!")

}