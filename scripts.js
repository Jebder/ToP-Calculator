function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return y - x;    
};

function divide(x, y) {
    return y / x;
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
};

function populate (event) {
    let id = event.target.dataset.buttonValue;
    if (isNaN(id) === false) {
        num = num + id;
    } else {
        previousNum = num;
        num = '';
        operator = id;
        displayString += previousNum + operator;
    }

    console.log(num);
    console.log(previousNum);
    console.log(operator);
};

function del(){
   num = num.slice(0, num.length - 1)
}; 

let displayString = '';
let num = '';
let previousNum = null;
let operator = null;
let result = null;

let numButtons = document.querySelectorAll(".numbers");
let opButtons = document.querySelectorAll('.operatorButtons')
let equalsButton = document.querySelector('.equalsButton');

let clearButton = document.querySelector('#clear');
let delButton = document.querySelector('#del');

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', (event) => {
        populate(event);
        bottomDisplay.textContent = num;
    })
});

opButtons.forEach((opButton) => {
    opButton.addEventListener('click', (event) => {
        operate(num, operator, previousNum);
        populate(event);
        bottomDisplay.textContent = result;
        topDisplay.textContent = displayString;

    })
});

equalsButton.addEventListener('click', function() {
    operate(num, operator, previousNum);
    bottomDisplay.textContent = result;
});

clearButton.addEventListener('click', () => {
    location.reload();
});

delButton.addEventListener('click', ()=>{
    del();
    bottomDisplay.textContent = num;
});

//                  TO DO LIST

// make prettier.

// when you do 3+3 = 6 then do + 3 the result isnt 9. 

// make back display all of the calculations (maybe with array)

// cant do 3 + 3 + 3 = 9 only 2 nums at a time. 

// add error handling (like del() when string length = 0)