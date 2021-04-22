'use strict'

console.clear();

// setInterval

/**
 * ESTE RETRASO ES UN HECHO QUE OCURRE EN VALOR 0 DEL TIEMPO DE INICIO
 * (EN EL NAVEGADOR)
 * 
 * NOTA: HAY UN LIMITANTE EN CUANTO TIMERS QUE PUEDEN CORRER EN HTML5
 *       ESTO QUIERE DECIR QUE DESPUES DE 5 ANIDACIONES, LOS INTERVALOS
 *       SON FORZADOS DE AL MENOS 4 MILISEGUNDOS * 
 * 
 */

// EVENTOS

var zeroDelay = document.querySelector("#zeroDelay");
zeroDelay.addEventListener('click', () => {

    declararZero();

})

var zeroDelay2 = document.querySelector("#zeroDelay2");
zeroDelay2.addEventListener('click', () => {

    declararZero2();

})

// FUNCIONES

function declararZero(){

    setTimeout(() => alert("Envio de evento 0"));

}

function declararZero2(){

    let inicio = Date.now();
    //alert(inicio); // 1619049318662
    let tiempos = [];

    //2,5,7,9,13,18,23,28,34,38,43,49,54,58,63,68,73,77,81,86,92,97,102
    //2,5,6,8,13,17,22,27,32,36,41,45,50,55,61,66,71,76,80,85,89,94,99,104
    //3,5,7,9,14,20,26,31,37,43,48,53,58,64,70,74,79,84,88,93,98,103
    
    setTimeout(function run() {

        tiempos.push(Date.now() - inicio);

        if(inicio + 100 < Date.now()){
            alert(tiempos); // VA A MOSTRARME LOS DELAY DESPUES DE 100MS
        }else{
            setTimeout(run);
        }

    } )


}
