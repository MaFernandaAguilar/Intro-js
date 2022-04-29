var edad =prompt("Dame tu edad");
var nombre = prompt("Dame tu nombre");
if(edad < 18){
    alert("No puedes entrar a la discoteca");
}else if(edad >= 18){
    if(nombre==="Mario" || nombre==="Carlos"){
        alert("BIENVENIDO  " + nombre +" PUEDES INGRESAR A LA SALA VIP")
    }else{
        alert("Puedes entrar a la discoteca");  
    }
}