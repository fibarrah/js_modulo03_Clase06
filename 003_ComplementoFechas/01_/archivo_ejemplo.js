'use strict'

console.clear();

// 

// EVENTOS
var btn_opcion1 = document.querySelector("#btn_opcion1");
btn_opcion1.addEventListener('click', () => {

    var hoy = new Date();
    
    var fecha1 = new Date("December 17, 2020 03:03:20");
    var fecha2 = new Date(2020,12,17);
    var fecha3 = new Date(2020,12,17,3,24,23);

    console.log(fecha1);
    console.log(fecha2);
    console.log(fecha3);
})

var btn_opcion2 = document.querySelector("#btn_opcion2");
btn_opcion2.addEventListener('click', () => {

    var hoy = new Date();
    
    var dia = hoy.getDay();
    var mes = hoy.getMonth();
    var anio = hoy.getFullYear();

    var hora = hoy.getHours();
    var minuto = hoy.getMinutes();
    var segundos = hoy.getSeconds();

    console.log(dia.toString().padStart(2,0) + "-" + mes.toString().padStart(2,0) + "-" + anio);
    console.log(hora + ":" + minuto + ":" + segundos);

})