
let button = document.getElementById('submit');

if (button !== null)
{
    button.addEventListener('click', clickHandler);
}

function clickHandler(event: MouseEvent) {

    let xTextBox = document.getElementById('x') as HTMLInputElement ;
    let yTextBox = document.getElementById('y') as HTMLInputElement ;
    let resultElement = document.getElementById('result');

    if (xTextBox !== null && yTextBox !== null && resultElement !== null)
    {
        let xv = Number(xTextBox.value)
        let yv = Number(yTextBox.value);

        resultElement.innerHTML = `result is ${xv+yv}` ;
    }
}

