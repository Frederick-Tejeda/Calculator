/*var NUMERO

NUMERO = prompt("¿Cuantos son?")

var DINERO = []; var NOMBRES = []

for (let i = 0; i < NUMERO; i++){
	NOMBRES[i] = prompt("Ingresa nombre")
	DINERO[i] = prompt("Ingresa cantidad")
	}

for(let j = 0; j < NUMERO; j++){
if (DINERO[j] >= 90 && DINERO[j] < 100) alert(`${NOMBRES[j]}: Vainilla solamente`)
else if(DINERO[j] < 90) alert(`${NOMBRES[j]}: No tienes suficiente`)

if (DINERO[j] >= 100 && DINERO[j] < 120) alert(`${NOMBRES[j]}: Chocolate y vainilla`)
else if(DINERO[j] > 90 && DINERO[j] > 120) alert(`${NOMBRES[j]}: Chocolate, vainilla o fresa`)
} 
*/
/*
let RESULTADO; let ARRAY = [];let OCACION = 0;let j = 1;
let PRIMER = parseInt(prompt("Ingrese el primer numero"))
let DATO = prompt("Ingrese la operacion");
if(DATO == "&") 
RAIZ();
if(DATO === "+")
SUMAR();
if(DATO == "-") 
RESTAR();
if(DATO == "x")
MULTIPLICAR();
if(DATO == "/")
DIVIDIR();
if(DATO == "*")
    POTENCIA();
if(DATO == "%")
    PORCIENTO();

function SUMAR(){
    let SEGUNDO = parseInt(prompt("Ingrese el segundo numero"))
RESULTADO = PRIMER + SEGUNDO;
// alert(RESULTADO)
alert(`El resultado es: ${RESULTADO}`)
}
function RESTAR(){
    let SEGUNDO = parseInt(prompt("Ingrese el segundo numero"))
RESULTADO = PRIMER - SEGUNDO;
alert(`El resultado es: ${RESULTADO}`)
}
function MULTIPLICAR(){
    let SEGUNDO = parseInt(prompt("Ingrese el segundo numero"))
RESULTADO = PRIMER * SEGUNDO;
alert(`El resultado es: ${RESULTADO}`)
}
function DIVIDIR(){
    let SEGUNDO = parseInt(prompt("Ingrese el segundo numero"))
RESULTADO = PRIMER / SEGUNDO;
alert(`El resultado es: ${RESULTADO}`)
}
//function POTENCIA(){
//RESULTADO = PRIMER ** SEGUNDO;
//alert(`El resultado es: ${RESULTADO}`)
//}
 function POTENCIA(){
     let SEGUNDO = parseInt(prompt("Ingrese el segundo numero"))
     if(SEGUNDO == 1){
        alert(`El resultado es: ${PRIMER}`)
    }if(SEGUNDO > 1){
SEGUNDO = SEGUNDO - 1;
OCACION = PRIMER * PRIMER;
for(let i = 1; i < SEGUNDO; i++){
OCACION = OCACION * PRIMER;
}
   alert(`El resultado es: ${OCACION}`)
    }
}
function RAIZ(){
    while(j < PRIMER){
        if(j * j == PRIMER){
        alert(`El resultado es: ${j}`);
        break
        }
        j++
    } 
    if(j * j !== PRIMER){
        alert("ERROR")
     }
    
}
function PORCIENTO(){
  //  let SEGUNDO = parseInt(prompt("Ingrese el segundo numero"));
    if(SEGUNDO == 1){
        RESULTADO = PRIMER / 100;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
    if(SEGUNDO == 2){
        RESULTADO = PRIMER / 50;
      // alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 3){
        RESULTADO = PRIMER / 33;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 4){
        RESULTADO = PRIMER / 25;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 5){
        RESULTADO = PRIMER / 20;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 6){
        RESULTADO = PRIMER / 16.6666666667;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 10){
        RESULTADO = PRIMER / 10;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 20){
        RESULTADO = PRIMER / 5;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 33){
        RESULTADO = PRIMER / 3;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 40){
        RESULTADO = PRIMER / 2.5;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 50){
        RESULTADO = PRIMER / 2;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 66){
        RESULTADO = PRIMER - PRIMER / 3;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 75){
        RESULTADO = PRIMER - PRIMER / 4;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 80){
        RESULTADO = PRIMER - PRIMER / 5;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 100){
       //alert(`El resultado es: ${PRIMER}`);
    IMPRENTA.innerHTML = PRIMER;
}
}

/*
class Persona{
    constructor(EDAD, COLOR, GENERO){
        this.EDAD = EDAD;
        this.COLOR = COLOR;
        this.GENERO = GENERO
    }
}

const Manuel = new Persona(25, "moreno", "muchachón"); console.log(Manuel)
*/

var Hola = true;
/*
function hola(){
    if(Hola == true){
    //alert("Hola");
      let Body = document.getElementById("body");
      let Contener = document.getElementById("contenedor");
      Body.style.background = "white";  
      Contener.style.background = "rgb(30, 30, 30, 1)";
      Hola = false;
        return;
    }
    if(Hola == false){
        //alert("adios");
        let Body = document.getElementById("body");
        let Contener = document.getElementById("contenedor");
      Body.style.background = "black";
      Contener.style.background = "#fff";
        Hola = true;
        return;
    }
}*/

var dividir = false; var raiz = false; var sumar = false; var restar = false; var multiplicar = false; var porcentar = false; var potenciar = false; var RESULTADO;

var PRIMER; var SEGUNDO;

function C(){
    document.getElementById("imprenta").innerHTML = "";
}
function nueve(){
    document.getElementById("imprenta").innerHTML += "9";
}
function ocho(){
    document.getElementById("imprenta").innerHTML += "8";
}
function siete(){
    document.getElementById("imprenta").innerHTML += "7";
}
function seis(){
    document.getElementById("imprenta").innerHTML += "6";
}
function cinco(){
    document.getElementById("imprenta").innerHTML += "5";
}
function cuatro(){
    document.getElementById("imprenta").innerHTML += "4";
}
function tres(){
    document.getElementById("imprenta").innerHTML += "3";
}
function dos(){
    document.getElementById("imprenta").innerHTML += "2";
}
function uno(){
    document.getElementById("imprenta").innerHTML += "1";
}
function cero(){
    document.getElementById("imprenta").innerHTML += "0";
}
function punto(){
    document.getElementById("imprenta").innerHTML += ".";
}
 function suma(){
    PRIMER = parseInt(document.getElementById("imprenta").innerHTML);
document.getElementById("imprenta").innerHTML = "";
    sumar = true;
}
function resultado(){
    var IMPRENTA = document.getElementById("imprenta"); 
   SEGUNDO = parseInt(IMPRENTA.innerHTML);
   IMPRENTA.innerHTML = "";
if(sumar == true){
 IMPRENTA.innerHTML = PRIMER + SEGUNDO;
 sumar = false;
}
 if(restar == true){
 IMPRENTA.innerHTML = PRIMER - SEGUNDO;
 restar = false;
}
 if(multiplicar == true){
 IMPRENTA.innerHTML = PRIMER * SEGUNDO;
 multiplicar = false;
}
 if(dividir == true){
 IMPRENTA.innerHTML = PRIMER / SEGUNDO;
 dividir = false;
}
 if(potenciar == true){
 IMPRENTA.innerHTML = PRIMER ** SEGUNDO;
 potenciar = false;
}/*
if(porcentar == true){
    if(SEGUNDO == 1){
        RESULTADO = PRIMER / 100;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
    if(SEGUNDO == 2){
        RESULTADO = PRIMER / 50;
      // alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 3){
        RESULTADO = PRIMER / 33;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 4){
        RESULTADO = PRIMER / 25;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 5){
        RESULTADO = PRIMER / 20;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 6){
        RESULTADO = PRIMER / 16.6666666667;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 10){
        RESULTADO = PRIMER / 10;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 20){
        RESULTADO = PRIMER / 5;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 33){
        RESULTADO = PRIMER / 3;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 40){
        RESULTADO = PRIMER / 2.5;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 50){
        RESULTADO = PRIMER / 2;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 66){
        RESULTADO = PRIMER - PRIMER / 3;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 75){
        RESULTADO = PRIMER - PRIMER / 4;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 80){
        RESULTADO = PRIMER - PRIMER / 5;
       //alert(`El resultado es: ${RESULTADO}`) 
        IMPRENTA.innerHTML = RESULTADO;
}
if(SEGUNDO == 100){
       //alert(`El resultado es: ${PRIMER}`);
    IMPRENTA.innerHTML = PRIMER;}
    porcentar = false;
}
}
function porciento(){
    PRIMER = document.getElementById("imprenta").innerHTML;
  document.getElementById("imprenta").innerHTML = "";
    porcentar = true;
}*/
function resta(){
    PRIMER = document.getElementById("imprenta").innerHTML;
document.getElementById("imprenta").innerHTML = "";
    restar = true;
}
function multiplicacion(){
    PRIMER = document.getElementById("imprenta").innerHTML;
document.getElementById("imprenta").innerHTML = "";
    multiplicar = true;
}
function division(){
    PRIMER = document.getElementById("imprenta").innerHTML;
document.getElementById("imprenta").innerHTML = "";
    dividir = true;
}
function potencia(){
    PRIMER = document.getElementById("imprenta").innerHTML;
    document.getElementById("imprenta").innerHTML = "";
    potenciar = true;
}
function RAIZ(){ 
     var IMPRENTA = document.getElementById("imprenta");
    PRIMER = parseInt(IMPRENTA.innerHTML);
    var j = 0;
//IMPRENTA.innerHTML = Math.sqrt(PRIMER);
      while(j < PRIMER){
        if(j * j == PRIMER){
        IMPRENTA.innerHTML = j;
        break;
        }
        j++;
    } 
    if(j * j !== PRIMER){
       IMPRENTA.innerHTML = "ERROR";
     }
}
function cambio(){
    var BODY = document.getElementById("body");
    var CONTENEDOR = document.getElementById("contenedor");
if(Hola == true){
    BODY.style.background = "#fff";
    CONTENEDOR.style.background = "rgb(30, 30, 30, 1)";
    Hola = false;
}else{
     BODY.style.background = "rgb(30, 30, 30, 1)";
     CONTENEDOR.style.background = "#eee";
  Hola = true;
}
}






const array = {
    ojo:
    {
        tamaño:{ dimen: {literal: "Grande"} },
        color:"Negro"
    }, 
      cabeza: "Redonda"  
    };

console.log(array.ojo.tamaño.dimen.literal);












/*


class Persona{
    constructor(nombre, color, altura, edad, sexo){
        this.name = nombre;
        this.color = color;
        this.altura =  altura;
        this.edad = edad;
        this.sexo = sexo
    }
    verInfo(){
        alert(`Hola ${this.name}, veo que eres un ${this.color}, ${this.sexo} y que se te mide en ${this.altura}`)
    }
}
class elBajito extends Persona{
     constructor(nombre, color, altura, edad, sexo, hablar){
         super(nombre, color, altura, edad, sexo);
     this.hablar = hablar
    }
     verInfo(){
        alert(`Hola ${this.name}, veo que eres un ${this.color}, ${this.sexo} y que se te mide en ${this.altura} con ${this.hablar}`)
    }
}

const Moisés = new Persona ("Moisés", "moreno", 1.74, 16, "masculino");

const moisés = new elBajito ("Moisés", "moreno", 1.74, 16, "masculino", "español");

moisés.verInfo();
*/
