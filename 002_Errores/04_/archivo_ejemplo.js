'use strict'

console.clear();

// MANEJO DE ERRORES TRY CATCH

// EVENTOS

var btn_Error1 = document.querySelector("#btn_Error1");
btn_Error1.addEventListener('click', () => {

    const valor = new auntentificacionError('Error N#1');
    console.log(valor.name);

})

var btn_Error2 = document.querySelector("#btn_Error2");
btn_Error2.addEventListener('click', () => {

   const valor = new BDError('DB Error');
   //console.log(valor instanceof BDError);
   console.log(valor.message);

})

// FUNCIONES

// CLASES

class auntentificacionError extends Error{

    constructor(mensaje){
        super(mensaje);
        this.name = 'ErrorIdentificacion'
        this.frutaFavorita = 'uvas'
    }

}

class BDError extends Error{

    constructor(mensaje){
        super(mensaje);
        this.name = 'ErrorBAseDeDAtos'
        this.message = 'Error en cadena MySQL'
        this.select_consulta = 'Error en SELECT'
    }

}