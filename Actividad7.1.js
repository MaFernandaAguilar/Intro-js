var oracion ="hola mundo";
var palabra = prompt("¿QUE PALABRA QUIERES BUSCAR");
function find(o,p){
    
    if(o.toLowerCase().indexOf(p.toLowerCase())!= -1){
        return true;
    }else {
        return false;
    }
    
}

var resultado = find(oracion, palabra);
console.log(resultado);