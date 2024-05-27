//Encuentra el número de elementos pares en una lista.
import * as rls from "readline-sync";

let cantidadNum:number = rls.questionInt("ingrese la cantidad de numeros de la lista: ");
let lista:number[]=new Array(cantidadNum);
let indice:number;
let numero:number=0;
let pares:number=0;

for (indice=0;indice < cantidadNum; indice++) {
    numero=rls.questionInt(`Ingrese el numero en la posicion ${indice}: `);
    lista[indice]=numero;
    if (lista[indice] % 2 == 0){
        pares++;
    }
    
};
console.log(`En la lista de ${cantidadNum} numeros, la cantidad de numeros pares es de ${pares}`);