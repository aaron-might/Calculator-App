const resetButton = document.getElementById('reset-button');
const equalButton = document.getElementById('equal-button');
const screen = document.getElementById('screen')

// global variables
var variables = ['', ''];
var operator = '';
var id = 0;

function reset() {

    variables = ['', ''];
    operator = '';
    id = 0;
    updateScreen(variables[id]);
}

function updateScreen() {
    if (variables[id] === '') {
        screen.innerText = '0';
    } else {
        screen.innerText = variables[id];
    }
}

// events

resetButton.addEventListener('click', reset);

// console.log(equalButton);
// console.log(resetButton);