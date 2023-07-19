
let button = document.getElementById('button');
button.addEventListener('click', clickHandler);

let resultDiv = document.getElementById('result');

function clickHandler(event) {

    resultDiv.innerHTML = `Hello JavaScript app` ;
}
