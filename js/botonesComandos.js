var buttonMod = document.querySelector(".buttonMod");
var buttonInfo = document.querySelector(".buttonInfo");
var buttonDiv = document.querySelector(".buttonDiv");

var comandosMod = document.querySelector(".comandosMod");
var comandosInfo = document.querySelector(".comandosInfo");
var comandosDiv = document.querySelector(".comandosDiv");

buttonMod.onclick = mod
buttonInfo.onclick = info
buttonDiv.onclick = div

function mod(){
    buttonMod.style.backgroundColor= "#23272A"
    buttonInfo.style.backgroundColor= "#2C2F33"
    buttonDiv.style.backgroundColor= "#2C2F33"
    comandosMod.style.display = "flex";
    comandosInfo.style.display = "none";
    comandosDiv.style.display = "none";
}

function info(){
    buttonMod.style.backgroundColor= "#2C2F33"
    buttonInfo.style.backgroundColor= "#23272A"
    buttonDiv.style.backgroundColor= "#2C2F33"
    comandosMod.style.display = "none";
    comandosInfo.style.display = "flex";
    comandosDiv.style.display = "none";
}

function div(){
    buttonMod.style.backgroundColor= "#2C2F33"
    buttonInfo.style.backgroundColor= "#2C2F33"
    buttonDiv.style.backgroundColor= "#23272A"
    comandosMod.style.display = "none";
    comandosInfo.style.display = "none";
    comandosDiv.style.display = "flex";
}