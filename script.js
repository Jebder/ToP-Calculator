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

function del(){
    num = num.slice(0, num.length - 1)
 }; 

 function operate() {
     numArray.push(parseInt(num, 10));
     let operation = '+';
     let result = numArray.reduce((total, currentValue) =>{
         if (typeof currentValue === 'number') {
             switch (operation) {
                 case '+':
                     return add(currentValue, total);
                 case '-':
                     return subtract(currentValue, total);
                 case '/':
                     return divide(currentValue, total);
                 case '*':
                     return multiply(currentValue, total);
             }
         } else{
             operation = currentValue;
             return total;
         }
     },0);
     bottomDisplay.textContent = result;
     console.log('result = ', result)
     console.log('array =',numArray)
 };

function populate(event){
    id = event.target.dataset.buttonValue;
    if (isNaN(id) === false){
        if (num === null){
            num = id;
        } else {
            num = num + id;
        } bottomDisplay.textContent = num;
    } else {
        if (num === null) {
            // do nothing
        } else {
            operator = id;
            numArray.push(parseInt(num, 10));
            numArray.push(operator);
            bottomDisplay.textContent = '0';
            topDisplay.textContent = numArray;
            num = '';
        };
    };
};


let numArray = [];
let num = null;
let operator = null;


let numButtons = document.querySelectorAll(".numbers");
let opButtons = document.querySelectorAll('.operatorButtons')
let equalsButton = document.querySelector('.equalsButton');

let clearButton = document.querySelector('#clear');
let delButton = document.querySelector('#del');

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', (event) => {
        populate(event);
        console.log(numArray)
        console.log(num);
    })
});

opButtons.forEach((opButton) =>{
    opButton.addEventListener('click', (event)=>{
        populate(event);
        console.log(numArray)
    })
});

equalsButton.addEventListener('click', () => {
    operate();
    console.log(num);
});

clearButton.addEventListener('click', () => {
    location.reload();
});

delButton.addEventListener('click', ()=>{
    del();
    bottomDisplay.textContent = num;
});

// To do list:

// Make display accurate including:
//      Remove commas.
//      Make the top display have the '=' in when done operating.
//      When doing 1 + 1 + 1 = 3, it displays 1 + 1 = 3 ...
//      ... need to include the last part of operation in topDisplay.

// Make prettier.
//      Could include making '*' = 'X' and '/' = '%'

// Allow for decimal numbers.
