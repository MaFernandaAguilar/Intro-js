var numbers =[1,2,3,4,10,11];
function suma(arr){
    var sum = 0
    for(var i=0; i<arr.length; i++){
        
        sum =sum + arr[i]; 
        
    }
    return sum
}

let resultado = suma(numbers);
console.log(resultado);
