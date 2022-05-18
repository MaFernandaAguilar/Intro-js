var palabra = prompt("Dame una palabra"); //pedir una palabra como entrada

function palindromo(p){
    var normal =p.split("");    //divide la palabra en caracter por caracter con el metodo split
    var invertido= p.split("").reverse(); // hace lo mismo pero con el metodo reverse se invierte el array
   for(let i =0; i<normal.length; i++){ //El for es paar iterar los arreglos al mismo tiempo
    if(normal[i].toLowerCase() == invertido[i].toLowerCase()){
    /*la condicion compara cada arreglo caracter por caracter si es verdadero que todas los caracteres son 
    iguales entonces la palbara si es un palindromo si no, no lo es */
        console.log(palabra + " Es polidromo")
    }else{
        console.log(palabra + " No es polidromo")
    }
    }    

}

//Se llama la funcion
palindromo(palabra);


