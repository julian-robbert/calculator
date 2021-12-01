//simple operation functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, c){
    if(a === '+'){
        return add(b, c);
    }else if(a === '-'){
        return subtract(b, c);
    }else if(a === 'x'){
        return multiply(b, c);
    }else if(a === '÷'){
        return divide(b, c);
    }else{
        return;
    }
}

//getting the HTML elements we need to manipulate
let clearButton = document.getElementById('clearButton');
let deleteButton = document.getElementById('deleteButton');
let sevenButton = document.getElementById('sevenButton');
let eightButton = document.getElementById('eightButton');
let nineButton = document.getElementById('nineButton');
let divideButton = document.getElementById('divideButton');
let fourButton = document.getElementById('fourButton');
let fiveButton = document.getElementById('fiveButton');
let sixButton = document.getElementById('sixButton');
let multiplyButton = document.getElementById('multiplyButton');
let oneButton = document.getElementById('oneButton');
let twoButton = document.getElementById('twoButton');
let threeButton = document.getElementById('threeButton');
let subtractButton = document.getElementById('subtractButton');
let zeroButton = document.getElementById('zeroButton');
let decimalPointButton = document.getElementById('decimalPointButton');
let equalsButton = document.getElementById('equalsButton');
let addButton = document.getElementById('addButton');

//declaring all the global variables used below
let displayContainer = document.getElementById('displayContainer');
let displayValue = '';
let operator = '';
let firstNum = null;
let secondNum = null;
let operatorCounter = 0;
let decimalCounter = 0;

//adds input to the display
function addInput(button){
    displayValue += button;
    //displayContainer.append(button);
    displayContainer.innerHTML += button;
}

//clears the display and resets variables
function clear(){
    displayValue = '';
    firstNum = null;
    secondNum = null;
    displayContainer.textContent = '';
    operatorCounter = 0;
    decimalCounter = 0;
}

//counts how many decimal places a number goes to
function countDecimals(value){
    decimalCounter = value.toString().split(".")[1].length || 0; 
}

/*
checks if the display is empty or there are no operators, in which case won't work
sets the second number to displayValue (which was changed after hitting and operator)
checks for dividing by 0
operates on firtNum and secondNum based on which operator button was pushed
checks if answer has a decimal point, counts how many. if more than 3, round up.
*/
function equals(){
    if(displayValue === '' || operatorCounter === 0){
        return;
    }
    secondNum = displayValue;
    if (operator === '÷' && secondNum === '0'){
        displayContainer.textContent = '';
        alert('Dividing by 0 could cause the universe to implode. Please try again.')
        displayContainer.innerHTML = 'Hit clear and try again';
        return;
    }
    displayValue = operate(operator, Number(firstNum), Number(secondNum));
    if(displayValue % 1 != 0){
        countDecimals(displayValue);
        if(decimalCounter > 3){    
            displayValue = Number(displayValue).toFixed(3);
        }
    }
    displayContainer.textContent = "";
    displayContainer.append(displayValue);
    operatorCounter = 0;
}

//checks if you've already put an operator, if so shows result before adding another
//also checks if no displayValue to prevent adding a different operator after the
function operatorButton(operatorButtonSelection){
    if(displayValue === ''){
        return;
    }
    if(operatorCounter > 0){
        equals();
    }
    firstNum = displayValue;
    operator = operatorButtonSelection;
    addInput(operatorButtonSelection);
    displayValue = '';
    operatorCounter++;
}

//operator buttons
divideButton.addEventListener('click', function(){
    operatorButton('÷');
});
multiplyButton.addEventListener('click', function(){
    operatorButton('x');
});
subtractButton.addEventListener('click', function(){
    operatorButton('-');
});
addButton.addEventListener('click', function(){
    operatorButton('+');
});

//special buttons
equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clear);

//regular number input buttons
sevenButton.addEventListener('click', function(){
    addInput('7');
});
eightButton.addEventListener('click', function(){
    addInput('8');
});
nineButton.addEventListener('click', function(){
    addInput('9');
});
fourButton.addEventListener('click', function(){
    addInput('4');
});
fiveButton.addEventListener('click', function(){
    addInput('5');
});
sixButton.addEventListener('click', function(){
    addInput('6');
});
oneButton.addEventListener('click', function(){
    addInput('1');
});
twoButton.addEventListener('click', function(){
    addInput('2');
});
threeButton.addEventListener('click', function(){
    addInput('3');
});
zeroButton.addEventListener('click', function(){
    addInput('0');
});
decimalPointButton.addEventListener('click', function(){
    addInput('.');
});