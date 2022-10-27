let numeros = [1,2,3,4,5,6,7,8,9,10];
let Lmin = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];

let Lmay = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
let car = ["!","·","$","%","&","/","(",")","=","?","¿","^^","*"];
let carX = ["¨",";",":",">","<","@","{","]","["];

var boton = document.getElementById("boton");
boton.onclick = function(){

    let CarX2 = Math.floor(Math.random()*(8-0));
    let num1 = Math.floor(Math.random()*(9-0))+0;
    let num2 = Math.floor(Math.random()*(9-0))+0;
    let letraMin = Math.floor(Math.random()*(22-0))+0;
    let letraMay = Math.floor(Math.random()*(22-0))+0;
    let Car = Math.floor(Math.random()*(12-0))+0;
    let CarX = Math.floor(Math.random()*(8-0))+0;
    let letraMay2 = Math.floor(Math.random()*(22-0))+0;
    
    var VenetanaGenerador = document.getElementById("number");
    VenetanaGenerador.innerHTML = Lmay[letraMay2]+  
        numeros[num1]  + Lmin[letraMin]
         + numeros[num2] + Lmay[letraMay] + car[Car] + carX[CarX] + carX[CarX2] ;
}

