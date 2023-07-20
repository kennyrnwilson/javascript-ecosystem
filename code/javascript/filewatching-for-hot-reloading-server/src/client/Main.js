import  arithmetic from './modules/Arithmetic.js';
var {add,subtract} = arithmetic;

console.log("Running Main.js");

let x = document.getElementById('xInput');
let y = document.getElementById('yInput');
let button = document.getElementById('submit');

button.addEventListener('click', clickHandler);

let r = document.getElementById('result');

function clickHandler(event) {
   let xv = Number(x.value)
   let yv = Number(y.value);
   
    r.innerHTML = `result is ${add(xv,yv)}` ;
}
