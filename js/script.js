function validarTexto(texto){
    var reglaValidacion = new RegExp("[a-z]");
    var ingresado = texto.value;

    if (ingresado==""){
        alert("Por favor ingrese un texto para desencriptar");
        return false;
    }else{
        if (reglaValidacion.test(ingresado)){
            return true;
        }else{
            alert("El encriptador admite solo letras minusculas");
            return false;
        }
    }
}

function encriptar (texto){
    var textoAEncriptar = texto.value;
    textoAEncriptar = textoAEncriptar.toLowerCase();
    textoAEncriptar = textoAEncriptar.replaceAll("e", "enter");    
    textoAEncriptar = textoAEncriptar.replaceAll("i", "imes");    
    textoAEncriptar = textoAEncriptar.replaceAll("a", "ai");    
    textoAEncriptar = textoAEncriptar.replaceAll("o", "ober");    
    textoAEncriptar = textoAEncriptar.replaceAll("u", "ufar");
    
    document.querySelector("#msg").value = textoAEncriptar;  
}

function desEncriptar (texto){

    var textoADesencriptar = texto.value;
    textoADesencriptar = textoADesencriptar.toLowerCase();
    textoADesencriptar = textoADesencriptar.replaceAll("enter", "e");    
    textoADesencriptar = textoADesencriptar.replaceAll("imes", "i");    
    textoADesencriptar = textoADesencriptar.replaceAll("ai", "a");    
    textoADesencriptar = textoADesencriptar.replaceAll("ober", "o");    
    textoADesencriptar = textoADesencriptar.replaceAll("ufar", "u");
    document.querySelector("#msg").value = textoADesencriptar;   
}
    
function copiar (input){
    input.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
}


var codificar = document.querySelector("#encriptar");
var textoIngresado = document.querySelector("#input");
var decodificar = document.querySelector("#desencriptar");
var copiado = document.querySelector("#copiar");
var copiarTexto = document.querySelector("#msg");

codificar.addEventListener("click",function(event){
    event.preventDefault();       
    validarTexto(textoIngresado);   
    encriptar(textoIngresado);      
    textoIngresado.value = "";       
})

decodificar.addEventListener("click",function(event){
    event.preventDefault();         
    validarTexto(textoIngresado);   
    desEncriptar(textoIngresado);   
    textoIngresado.value = "";       
})

copiado.addEventListener("click",function(event){
    event.preventDefault();
    copiar(copiarTexto)
})

function encriptar (texto){
    var encriptado = texto.value;
    encriptado = encriptado.toLowerCase();
    encriptado = encriptado.replaceAll("e", "enter");    
    encriptado = encriptado.replaceAll("i", "imes");    
    encriptado = encriptado.replaceAll("a", "ai");    
    encriptado = encriptado.replaceAll("o", "ober");    
    encriptado = encriptado.replaceAll("u", "ufar");  
    document.querySelector("#msg").value = encriptado;  
}

function desEncriptar (texto){
    var desencriptado = texto.value;
    desencriptado = desencriptado.toLowerCase();
    desencriptado = desencriptado.replaceAll("enter", "e");    
    desencriptado = desencriptado.replaceAll("imes", "i");    
    desencriptado = desencriptado.replaceAll("ai", "a");    
    desencriptado = desencriptado.replaceAll("ober", "o");    
    desencriptado = desencriptado.replaceAll("ufar", "u"); 
    document.querySelector("#msg").value = desencriptado;   
}
    
function copiar (input){
    input.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
}

