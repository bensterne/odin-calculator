let firstNumber;
let operator;
let lastNumber;

const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');

const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
const subtractBtn = document.querySelector('#subtract');
const addBtn = document.querySelector('#add');

const equalsBtn = document.querySelector('#equals');

const display = document.querySelector('#display');

function inputNumber(evt){
    if (firstNumber === undefined && operator === undefined){
        display.textContent = evt.target.textContent;
        firstNumber = parseInt(display.textContent);
    } else if (firstNumber != undefined && operator === undefined){
        display.textContent = display.textContent + evt.target.textContent;
        firstNumber = parseInt(display.textContent);
    } else if (firstNumber != undefined && operator != undefined && lastNumber === undefined){
        display.textContent = evt.target.textContent;
        lastNumber = parseInt(display.textContent);
    } else if (firstNumber != undefined && operator != undefined && lastNumber != undefined){
        display.textContent = display.textContent + evt.target.textContent;
        lastNumber = parseInt(display.textContent);
    } 
}

btn0.addEventListener("click", inputNumber);
btn1.addEventListener("click", inputNumber);
btn2.addEventListener("click", inputNumber);
btn3.addEventListener("click", inputNumber);
btn4.addEventListener("click", inputNumber);
btn5.addEventListener("click", inputNumber);
btn6.addEventListener("click", inputNumber);
btn7.addEventListener("click", inputNumber);
btn8.addEventListener("click", inputNumber);
btn9.addEventListener("click", inputNumber);

function addOperator(evt){
    if (firstNumber != undefined){
        operator = evt.target.textContent;
    } 
}

divideBtn.addEventListener("click", addOperator);
multiplyBtn.addEventListener("click", addOperator);
subtractBtn.addEventListener("click", addOperator);
addBtn.addEventListener("click", addOperator);

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

function  operate() {
    let output;
    if (operator = "+"){
        output = add(firstNumber,lastNumber);
    } else if (operator ="-"){
        output= subtract(firstNumber,lastNumber);
    } else if (operator ="*"){
        output= multiply(firstNumber,lastNumber);
    } else if (operator ="/"){
        output = divide(firstNumber,lastNumber);
    }
    output = parseInt(output);
    display.textContent = output;
    output = firstNumber;
    lastNumber = undefined;
    return output;
}

equalsBtn.addEventListener("click", operate);