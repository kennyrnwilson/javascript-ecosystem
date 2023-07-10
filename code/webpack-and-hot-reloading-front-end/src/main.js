import a from './modules/arithmetic.js';
var {add,subtract} = a;
import {divide} from './modules/arithmetic.js';

console.log("World2")

let x = document.getElementById('x');
let y = document.getElementById('y');
let button = document.getElementById('submit');

button.addEventListener('click', clickHandler);

let r = document.getElementById('result');

function clickHandler(event) {
   let xv = Number(x.value)
   let yv = Number(y.value);
   
    r.innerHTML = `result is also ${divide(xv,yv)}` ;
}
