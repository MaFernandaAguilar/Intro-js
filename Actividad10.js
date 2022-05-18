/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
 const arr = [3,4,6,1,5,2,9,10,23,12];
 function orden(array){
    var ordenar =array.sort(function(a,b){return a-b})      //ordene el arreglo que entra a la funcion
    console.log(ordenar);                   
    console.log("El segundo numero mas bajo es: " + ordenar[1])     //Dado que el segundo numero del arreglo es el segundo mas bajo, se pone el indice 1
    console.log("El segundo numero mas alto es: " + ordenar[ordenar.length-2]) //para saber cual es indice que tiene el segundo mas alto es el tamaño del arreglo meno dos, por que los arreglos inician su indice en 0
 }
 orden(arr);
 

/*
const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así: 

            ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/

const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
    
]

//no supe como hacer este




    /**
  * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.

Ejemplo

La matriz es la lista original. Los números que faltan son
     matriz = [7,2,5,3,5,3]
     br = [7,2,5,4,6,3,5,3]

     Los números que faltan en arr son [4,6]

*/
let matriz = [7,2,5,3,5,3];
let br = [7,2,5,4,6,3,5,3];
var verificar=[];
for(let i=0; i<br.length; i++){
    if(matriz.includes(br[i])){
        continue;
    }else{
        verificar.push(br[i]);
    }
}
console.log(verificar);

