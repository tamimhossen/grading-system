let button = document.getElementById('calculate');
let renderDiv = document.getElementById('result');

function renderResult() {
    const input = document.getElementById('marks').value;
    const inputValue = parseInt(input);

    if (inputValue < 33) {
        renderDiv.innerHTML = `<h1>F</h1>`;
    } else if( inputValue >=33 && inputValue < 40) {
        renderDiv.innerHTML = `<h1>D</h1>`;
    } else if ( inputValue >= 40 && inputValue < 50) {
        renderDiv.innerHTML = `<h1>C</h1>`;
    } else if ( inputValue >= 50 && inputValue < 60) {
        renderDiv.innerHTML = `<h1>B</h1>`;
    } else if ( inputValue >= 60 && inputValue < 70 ) {
        renderDiv.innerHTML = `<h1>A-</h1>`;
    } else if ( inputValue >= 70 && inputValue < 80) {
        renderDiv.innerHTML = `<h1>A</h1>`;
    } else if ( inputValue >= 80 && inputValue <= 100) {
        renderDiv.innerHTML = `<h1>A+</h1>`;
    } else {
        renderDiv.innerHTML = `<h1> Invalid marks </h1>`;
    }
}

button.addEventListener('click', renderResult);