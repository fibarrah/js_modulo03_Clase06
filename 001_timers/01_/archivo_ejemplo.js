'use strict'

console.clear();

// TIMERS


/**
 * 
 * 2 METODOS
 * 
 *  setTimeout: ejecuta una funcion despues de un intervalo
 * 
 *  setInterval: repite una funcion en un intervalo de tiempo
 * 
 * 
 */

// EVENTOS

var btn_prueba1 = document.querySelector("#btn_prueba1");
btn_prueba1.addEventListener('click', () => {

    // setTimeout(func|code,[delay],[argumentos]....)
    setTimeout(mandarAlerta, 3000);

})

var btn_prueba2 = document.querySelector("#btn_prueba2");
btn_prueba2.addEventListener('click', () => {

    var nombre_completo = {
        mensaje: 'Bienvenido',
        nombre: 'Fernando'
    }

    setTimeout(mandarAlertaParametros,3000,nombre_completo);

})


// FUNCIONES

// SIN PARAMETROS
function mandarAlerta(){
    alert("alerta enviada");
}

// CON ARGUMENTOS
function mandarAlertaParametros(informacion){

  alert(informacion.mensaje + ", " + informacion.nombre);

}