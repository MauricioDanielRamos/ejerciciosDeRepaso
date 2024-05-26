//Calcula la suma de dos arreglos elemento por elemento.
import * as rls from "readline-sync";
let cantidad: number = rls.questionInt(`Ingrese las cantidades de indices de los arreglos: `)
let arreglo1 : number[] = new Array(cantidad);
let arreglo2 : number[] = new Array(cantidad);
let SumaDeArreglos : number[] = new Array(cantidad);
let indice : number;

for (indice = 0; indice < cantidad; indice++) {
arreglo1[indice]=rls.questionInt(`Ingrese el valor del primer arreglo en el indice ${indice} : `);
}

for (indice = 0; indice < cantidad; indice++) {
arreglo2[indice]=rls.questionInt(`Ingrese el valor del segundo arreglo en el indice ${indice} : `);
}

for (indice = 0; indice < cantidad; indice++) {
SumaDeArreglos[indice] = arreglo1[indice] + arreglo2[indice];
console.log (`La suma de arreglos en indice ${indice} es = ${SumaDeArreglos[indice]}`);
};