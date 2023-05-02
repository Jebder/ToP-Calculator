function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;    
};

function divide(x, y) {
    return x / y;
};

function multiply(x, y) {
    return x * y ;
};

function operate(x, op, y) {
    x = parseInt(x);
    y = parseInt(y);
    switch (op) {
        case '*':
            result = multiply(x, y);
            break;
        case '/':
            result = divide(x, y);
            break;
        case '+':
            result = add(x, y);
            break;
        case '-':
            result = subtract(x, y);
            break;
    }
    console.log(result)
    //displayArray.push(result);
};

function populate (event) {
    let id = event.target.dataset.buttonValue;
    if (isNaN(id) === false) {
        num = num + id;
    } else {
        previousNum = num;
        num = '';
        operator = id;
    }

    console.log(num);
    console.log(previousNum);
    console.log(operator);
};

let displayArray = [0];
let num = '';
let previousNum = null;
let operator = null;
let result = null;

let numButtons = document.querySelectorAll(".numbers");
let opButtons = document.querySelectorAll('.operatorButtons')
let equalsButton = document.querySelector('.equalsButton');

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', (event) => {
        populate(event);
        bottomDisplay.textContent = num;
    })
});

opButtons.forEach((opButton) => {
    opButton.addEventListener('click', (event) => {
        populate(event);
        bottomDisplay.textContent = operator;
        topDisplay.textContent = previousNum;

    })
});

equalsButton.addEventListener('click', function() {
    operate(num, operator, previousNum);
    bottomDisplay.textContent = result;
});