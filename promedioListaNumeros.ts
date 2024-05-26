//Encuentra el promedio de una lista de numeros
import * as rls from "readline-sync";
let cantidadNum:number = rls.questionInt("ingrese la cantidad de numeros de la lista: ");
let listaNum:number[]=new Array(cantidadNum);
let indice:number;
let numero:number;
let suma:number=0;
let promedio:number=0;
for (indice = 0; indice < cantidadNum ; indice++){
    numero=rls.questionInt(`Ingrese el numero en la posicion ${indice}: `);
    listaNum [indice]=numero;
    suma += listaNum[indice];
};
/*for(indice=0; indice < cantidadNum; indice++) {
    suma += listaNum[indice];
};*/
promedio = suma/cantidadNum;
console.log(listaNum);
console.log(suma);
console.log(promedio);