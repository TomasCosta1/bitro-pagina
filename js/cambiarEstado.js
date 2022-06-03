var on = "f";


var estado = document.querySelector(".estado");
var txtEstado = document.querySelector(".txtEstado");
var circuloEstado = document.querySelector(".circuloEstado")


function comprobarEstado(){
    if(on=="v"){
        estado.style.color = "green";
        circuloEstado.style.animationDuration = "0.5s"
        txtEstado.textContent = "Online"
    }else if(on!="v"){
        estado.style.color = "grey";
        circuloEstado.style.animationDuration = "0s"
        txtEstado.textContent = "Offline"
    }
}

setInterval(comprobarEstado, 10)