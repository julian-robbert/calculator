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
