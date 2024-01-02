var dividir = false, raiz = false, sumar = false, restar = false, MENU = true,
multiplicar = false, porcentar = false; var potenciar = false, Hola = true;
var RESULTADO, PRIMER, SEGUNDO, last;

function C(){
    document.getElementById("imprenta").innerHTML = "";
}
function nueve(){
    document.getElementById("imprenta").innerHTML += "9";
    last = "9";
}
function ocho(){
    document.getElementById("imprenta").innerHTML += "8";
    last = "8";
}
function siete(){
    document.getElementById("imprenta").innerHTML += "7";
    last = "7";
}
function seis(){
    document.getElementById("imprenta").innerHTML += "6";
    last = "6";
}
function cinco(){
    document.getElementById("imprenta").innerHTML += "5";
    last = "5";
}
function cuatro(){
    document.getElementById("imprenta").innerHTML += "4";
    last = "4";
}
function tres(){
    document.getElementById("imprenta").innerHTML += "3";
    last = "3";
}
function dos(){
    document.getElementById("imprenta").innerHTML += "2";
    last = "2";
}
function uno(){
    document.getElementById("imprenta").innerHTML += "1";
    last = "1";
}
function cero(){
    document.getElementById("imprenta").innerHTML += "0";
    last = "0";
}
function suma(){
    document.getElementById("imprenta_2").innerHTML += document.getElementById("imprenta").innerHTML + "+";
    PRIMER = parseInt(document.getElementById("imprenta").innerHTML);
    document.getElementById("imprenta").innerHTML = "";
    sumar = true;
}
function resultado(){
    var IMPRENTA = document.getElementById("imprenta"); 
    document.getElementById("imprenta_2").innerHTML += IMPRENTA.innerHTML + "=";
    SEGUNDO = parseInt(IMPRENTA.innerHTML);
    IMPRENTA.innerHTML = "";
    if(sumar){
        IMPRENTA.innerHTML = PRIMER + SEGUNDO;
        sumar = false;
    }else if(restar){
        IMPRENTA.innerHTML = PRIMER - SEGUNDO;
        restar = false;
    }else if(multiplicar){
        IMPRENTA.innerHTML = PRIMER * SEGUNDO;
        multiplicar = false;
    }else if(dividir){
        IMPRENTA.innerHTML = PRIMER / SEGUNDO;
        dividir = false;
    }else{
        IMPRENTA.innerHTML = PRIMER ** SEGUNDO;
        potenciar = false;
    }
}
function resta(){
    document.getElementById("imprenta_2").innerHTML += document.getElementById("imprenta").innerHTML + "-";
    PRIMER = document.getElementById("imprenta").innerHTML;
    document.getElementById("imprenta").innerHTML = "";
    restar = true;
}
function multiplicacion(){
    document.getElementById("imprenta_2").innerHTML += document.getElementById("imprenta").innerHTML + "x";
    PRIMER = document.getElementById("imprenta").innerHTML;
    document.getElementById("imprenta").innerHTML = "";
    multiplicar = true;
}
function division(){
    document.getElementById("imprenta_2").innerHTML += document.getElementById("imprenta").innerHTML + "/";
    PRIMER = document.getElementById("imprenta").innerHTML;
    document.getElementById("imprenta").innerHTML = "";
    dividir = true;
}
function potencia(){
    document.getElementById("imprenta_2").innerHTML += document.getElementById("imprenta").innerHTML + "*";
    PRIMER = document.getElementById("imprenta").innerHTML;
    document.getElementById("imprenta").innerHTML = "";
    potenciar = true;
}
function RAIZ(){ 
    var IMPRENTA = document.getElementById("imprenta");
    PRIMER = parseInt(IMPRENTA.innerHTML);
    let j = 0;
    IMPRENTA.innerHTML = Math.sqrt(PRIMER);
}
function cambio(){
    var BODY = document.getElementById("body");
    var CONTENEDOR = document.getElementById("contenedor");
    var header = document.getElementById("content");
    var hr = document.getElementsByTagName("hr");
    if(Hola){
        BODY.style = "background:#fff;width:100vw;height:100vh;overflow:hidden;";
        CONTENEDOR.style.boxShadow = "0px 0px 15px #000";
        header.style.backgroundColor = "rgb(200, 200, 200, 1)";
        hr.style.border = "1px solid #222";
        Hola = false;
    }else{
        BODY.style = "background:rgb(30, 30, 30, 1);width:100vw;height:100vh;overflow:hidden;";
        CONTENEDOR.style.boxShadow = "0px 0px 15px #fff";
        header.style.backgroundColor = "rgb(50, 50, 50, 1)";
        hr.style.border = "1px solid #fff";
        Hola = true;
    }
}
function del(){
    PRIMER = "";
    SEGUNDO = "";
    document.getElementById("imprenta_2").innerHTML  = "";
    document.getElementById("imprenta").innerHTML  = "";
}
function menu(){
	if(MENU){
		document.getElementById("content").style.visibility = "visible";
		document.getElementById("header").style.top = "0%";
		document.getElementById("hr_1").style.transform = "rotate(42deg)";
		document.getElementById("hr_1").style.marginTop = "36%";
		document.getElementById("hr_2").style.visibility = "hidden";
		document.getElementById("hr_3").style.transform = "rotate(-42deg)";
		document.getElementById("hr_3").style.marginTop = "-25%";
		MENU = false;
		}else{
        document.getElementById("header").style.top = "-90%";
        document.getElementById("hr_1").style.transform = "rotate(0deg)";
        document.getElementById("hr_1").style.marginTop = "18%";
        document.getElementById("hr_2").style.visibility = "visible";
        document.getElementById("hr_3").style.transform = "rotate(0deg)";
        document.getElementById("hr_3").style.marginTop = "18%";
        document.getElementById("content").style.visibility = "hidden";
        MENU = true;
        }
	}