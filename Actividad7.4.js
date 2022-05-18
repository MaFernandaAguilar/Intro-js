var convertidor =prompt("Si quieres convertir de grados celcius a Farenheit escribe (F) si quieres convertir de Farenheit a Celcius escribe (C)");
var num =prompt("Que valor quieres convertir");
switch (convertidor){
    case "C":
        Farenheit=celsiusFarenheit(num);
        console.log(Farenheit);
    break;
    case "F":
        Celsius=farenheitCelsius(num);
        console.log(Celsius)
    break;
    default:
    console.log("opcion invalida");
}
function celsiusFarenheit(c){
    var F =(c*9/5)+32;
    return F
}
function farenheitCelsius(F){
    var C = (F-32)*5/9;
    return C;
}