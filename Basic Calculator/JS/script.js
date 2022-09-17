let n1 = 7;
let n2 = 3;
document.getElementById("num1").textContent = n1;
document.getElementById("num2").textContent = n2;

function add(){
    document.getElementById("op").textContent = "+";
    let result = n1+n2;
    document.getElementById("result").textContent = "Result : " + result;
}

function sub(){
    document.getElementById("op").textContent = "-";
    let result = n1-n2;
    document.getElementById("result").textContent = "Result : " + result;
}

function div(){
    document.getElementById("op").textContent = "/";
    let result = n1/n2;
    document.getElementById("result").textContent = "Result : " + result;
}

function mul(){
    document.getElementById("op").textContent = "x";
    let result = n1*n2;
    document.getElementById("result").textContent = "Result : " + result;
}


function xoxo(){
    document.getElementById("op").textContent = "";
    document.getElementById("result").textContent = "Result : " + 0;
}