var num1 =Number(prompt("Dame un numero"));
var num2 =Number(prompt("Dame otro numero"));
var num3 =Number(prompt("Dame un numero"));
if(num1== num2 && num1== num3){
    console.log("Los numeros son iguales, no hay ninguno mayor");
}else if(num1 == num2  && num1>num3){
    console.log("El numero mayor es:  " + num1);
    console.log("El numero 1 y numero 2 son iguales");
}else if(num1 == num2  && num1<num3){
    console.log("El numero mayor es:  " + num3);
}else if(num2 == num3  && num2>num1){
    console.log("El numero mayor es:  " + num2);
    console.log("El numero 2 y numero 3 son iguales");
}else if(num2 == num3  && num2<num1){
    console.log("El numero mayor es:  " + num1);
}else if(num1 == num3  && num1>num2){
    console.log("El numero mayor es:  " + num1);
    console.log("El numero 1 y numero 3 son iguales");
}else if(num1 == num3  && num1<num2){
    console.log("El numero mayor es:  " + num2);
}else if(num1>num2 && num1>num3){
    console.log("El numero mayor es:  " + num1);
}else if(num2>num1 && num2>num3){
    console.log("El numero mayor es:  " + num2);
}else if (num3>num1 && num3>num2){
    console.log("El numero mayor es:  " + num3);
}
