const bg = document.querySelector(".bg");
const text = document.querySelector(".load-text");

let load = 0;

let int = setInterval(blurring , 30);


function blurring(){
    load++;

    if(load > 99){
    clearInterval(int);
    }


     text.innerText = `${load}%`;
     text.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
    console.log(`${load}`);

}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num , in_min , in_max , out_min , out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min ;
}
