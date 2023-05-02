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
    displayArray.push(result);
    console.log('operate');
};

function populate(event){
    let id = event.target.dataset.buttonValue;
    let topDisplay = document.querySelector('#topDisplay');
    let bottomDisplay = document.querySelector('#bottomDisplay');
    if (previousNum === undefined){
        previousNum = 0;
        displayArray.push(previousNum);
    } else {
        previousNum = displayArray[displayArray.length - 1];
        displayArray.push(previousNum);
        console.log(displayArray)
    };
  
    if (id ==='/'){
        operator = id;
        id = '÷';
    } else if (id ==='*') {
        operator = id;
        id = 'X';
    } else if (isNaN(parseInt(id, 10)) && id !== '.') {
        operator = id;
      } else {
        num = id;
    };
  
    topDisplay.textContent = previousNum;
    bottomDisplay.textContent = id;
    console.log(`Num = ${num}, Op = ${operator}, previousNum = ${previousNum}`);
  };
  
  let num = null;
  let previousNum = null;
  let operator = undefined;
  let result = null;
  
  let displayArray = [];
  
  let buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    if (button.dataset.buttonValue === '=') {
      button.addEventListener('click', () => {
        populate(event);
        operate();
      });
    } else {
      button.addEventListener('click', (event) => {
        populate(event);
      });
    }
  });




// need to make buttons accept more than one press to get
// the number we need to pass to the variables.
