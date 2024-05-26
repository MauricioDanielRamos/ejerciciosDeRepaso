//Encuentra el numero mas pequeño de una lista
import * as rls from "readline-sync";

let cantidadNum:number = rls.questionInt("ingrese la cantidad de numeros de la lista: ");
let lista:number[]=new Array(cantidadNum);
let indice:number;
let numero:number=0;
let auxiliar:number=100000000000000000000;//No se me ocurre como inicializarlo de otra manera
for (indice=0;indice < cantidadNum; indice++) {
    numero=rls.questionInt(`Ingrese el numero en la posicion ${indice}: `);
    lista[indice]=numero;
    if (numero < auxiliar){
        auxiliar = numero;
    } 
};  
console.log(auxiliar);
