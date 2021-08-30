const resetButton = document.getElementById('reset-button');
const equalButton = document.getElementById('equal-button');
const screen = document.getElementById('screen')
const deleteButton = document.getElementById('delete-button');
const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operator')
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

function del() {
    if (variables[id].length > 0) {
        variables[id] = variables[id].substr(0, variables[id].length - 1);
        updateScreen();

    }
}

// events

resetButton.addEventListener('click', reset); numberButtons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/; // <= Black Magic;)
        if (regexp.test(variables[id] + button.innerText))
            variables[id] += button.innerText;
        updateScreen();
        // it doesn't handle -> .123
    });
});

deleteButton.addEventListener('click', del);

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        id++;
        switch (button.innerText) {
            case '+':
            case '-':
            case '/':
                operator = button.innerText;
                break;
            case 'x':
                operator = '*';
        }
        console.log('variables: ', variables, ' id: ', id, ' operator: ', operator);
    })
})
// console.log(equalButton);
// console.log(resetButton);