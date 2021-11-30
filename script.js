function add(a, b){
    return a + b;
}
console.log(add(5, 10));

function subtract(a, b){
    return a - b;
}
console.log(subtract(10, 5));

function multiply(a, b){
    return a * b;
}
console.log(multiply(10, 5));

function divide(a, b){
    return a / b;
}
console.log(divide(10, 5));

function operate(a, b, c){
    if(a === '+'){
        return add(b, c);
    }else if(a === '-'){
        return subtract(b, c);
    }else if(a === '*'){
        return multiply(b, c);
    }else if(a === '/'){
        return divide(b, c);
    }else{
        return;
    }
}
console.log(operate('*', 5, 5));

let displayContainer = document.getElementById('displayContainer');
let displayValue = '';

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

function addInput(button){
    displayValue += button;
    displayContainer.append(button);
    console.log(displayValue);
}

function clear(){
    displayValue = '';
    displayContainer.textContent = "";
    console.log(displayValue);
}

// deleteButton.addEventListener('click', );
clearButton.addEventListener('click', clear);
sevenButton.addEventListener('click', function(){
    addInput('7');
} );
eightButton.addEventListener('click', function(){
    addInput('8');
});
nineButton.addEventListener('click', function(){
    addInput('9');
});
divideButton.addEventListener('click', function(){
    addInput('÷');
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
multiplyButton.addEventListener('click', function(){
    addInput('x');
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
subtractButton.addEventListener('click', function(){
    addInput('-');
});
zeroButton.addEventListener('click', function(){
    addInput('0');
});
decimalPointButton.addEventListener('click', function(){
    addInput('.');
});
// equalsButton.addEventListener('click', );
addButton.addEventListener('click', function(){
    addInput('+');
});


