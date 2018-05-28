/* creamos la funcion add */
const add = function (argument1,argument2){
    let Number1 = argument1;
    let Number2 = argument2;

    return Number1 + Number2
}
/* realizo document.write para verificar funcion add en pantalla */
/*document.write(add(1,5));*/

/**creamos la funcion multiply */
const multiply = function (argument1,argument2){
    let Number1 = argument1;
    let Number2 = argument2;

    return Number1 * Number2
}
/* realizo document.write para verificar funcion multiply en pantalla */
/*document.write(multiply(2,5));*/

/*procedo a resolver 36325 * (9824 + 777) hago document.write para imprimir resultado en web*/

document.write (multiply(36325,(add(9824,777))));
