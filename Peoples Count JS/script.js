let incCountEl = document.getElementById("count-el");
let resetCount = document.getElementById("count-el");
let decCountEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let resetSave = document.getElementById("save-el");

let count = 0;

function increment() {
    count=count+1;
    incCountEl.innerText = count;
}

function reset(){
    count=0;
    resetCount.innerText = 0;
}

function decrement(){
    count=count-1;
    decCountEl.innerText = count;
}

function save(){
    let countStr = count + " , ";
    saveEl.textContent += countStr;
    count = 0;
    incCountEl.innerText = count;

}

function del(){
    saveEl.innerText = "previous entries: ";
}
