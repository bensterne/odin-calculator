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
const addBtn = document.querySelector('#add')
;
const percentBtn = document.querySelector('#percent');
const decimalBtn = document.querySelector('#decimal');
const clearBtn = document.querySelector('#clear');
const plusMinusBtn = document.querySelector('#plus-minus');

const equalsBtn = document.querySelector('#equals');

const display = document.querySelector('#display');

function inputNumberBtn(evt){
    if (firstNumber === undefined && operator === undefined){
        display.textContent = evt.target.textContent;
        firstNumber = parseFloat(display.textContent);
    } else if (firstNumber != undefined && operator === undefined){
        if (firstNumber === "-0"){
            display.textContent = "-" + evt.target.textContent;
        } else if(firstNumber === 0){
            display.textContent = evt.target.textContent;
        } else {
            display.textContent = display.textContent + evt.target.textContent;
        }
        firstNumber = parseFloat(display.textContent);
    } else if (firstNumber != undefined && operator != undefined && lastNumber === undefined){
        display.textContent = evt.target.textContent;
        lastNumber = parseFloat(display.textContent);
    } else if (firstNumber != undefined && operator != undefined && lastNumber != undefined){
        if (lastNumber === "-0"){
            display.textContent = "-" + evt.target.textContent;
        } else if (lastNumber === 0) {
            display.textContent = evt.target.textContent;
        } else {
            display.textContent = display.textContent + evt.target.textContent;
        }
        lastNumber = parseFloat(display.textContent);
    } 
}

btn0.addEventListener("click", inputNumberBtn);
btn1.addEventListener("click", inputNumberBtn);
btn2.addEventListener("click", inputNumberBtn);
btn3.addEventListener("click", inputNumberBtn);
btn4.addEventListener("click", inputNumberBtn);
btn5.addEventListener("click", inputNumberBtn);
btn6.addEventListener("click", inputNumberBtn);
btn7.addEventListener("click", inputNumberBtn);
btn8.addEventListener("click", inputNumberBtn);
btn9.addEventListener("click", inputNumberBtn);

function addOperatorBtn(evt){
    if (firstNumber != undefined){
        operator = evt.target.textContent;
    } 
}

divideBtn.addEventListener("click", addOperatorBtn);
multiplyBtn.addEventListener("click", addOperatorBtn);
subtractBtn.addEventListener("click", addOperatorBtn);
addBtn.addEventListener("click", addOperatorBtn);

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = function(a,b) {
    if(b != 0){
       return a / b;
    } else if (b == 0){
        return "Oops, can't do that";
    }
    };

percentBtn.addEventListener("click", function(){
    let value = parseFloat(display.textContent) / 100;
    if (value.toString().length >10){
        display.textContent = parseFloat(value).toFixed(8);
    } else{
        display.textContent = value
    }
    if (lastNumber === undefined){
        firstNumber = parseFloat(firstNumber) / 100;
    } else if (lastNumber != undefined){
        lastNumber = parseFloat(lastNumber) / 100;
    }
});

decimalBtn.addEventListener("click", function(){
    if (firstNumber === undefined && operator === undefined ){
        display.textContent = "0."
        firstNumber = "0.";
    } else if (firstNumber != undefined && operator === undefined && !firstNumber.toString().includes(".")){
        display.textContent = `${firstNumber}.`
        firstNumber = `${firstNumber}.`
    } else if (firstNumber != undefined && operator != undefined && lastNumber === undefined){
        display.textContent = "0."
        lastNumber = "0.";
    } else if (firstNumber != undefined && operator != undefined && lastNumber != undefined  && !lastNumber.toString().includes(".")){
        display.textContent = `${lastNumber}.`
        lastNumber = `${lastNumber}.`
    }
});

clearBtn.addEventListener("click", function(){
    display.textContent = 0;
    firstNumber = undefined;
    lastNumber = undefined;
    operator = undefined;
});

plusMinusBtn.addEventListener("click", function(){
    if (firstNumber === undefined && operator === undefined){
        display.textContent = "-0";
        firstNumber = "-0";
    } else if (firstNumber != undefined && operator === undefined){
        firstNumber = -firstNumber;
        display.textContent = firstNumber;
    } else if (firstNumber != undefined && operator != undefined && lastNumber === undefined){
        display.textContent = "-0"
        lastNumber = "-0";
    } else if (firstNumber != undefined && operator != undefined && lastNumber != undefined) {
        lastNumber = -lastNumber;
        display.textContent = lastNumber;
    }
});

function  operate() {
    if (firstNumber != undefined && operator != undefined && lastNumber != undefined){
    let output;
    if (operator === "+"){
        output = add(firstNumber,lastNumber);
    } else if (operator === "-"){
        output= subtract(firstNumber,lastNumber);
    } else if (operator ==="*"){
        output= multiply(firstNumber,lastNumber);
    } else if (operator ==="/"){
        output = divide(firstNumber,lastNumber);
    }

    if (output != "Oops, can't do that"){
        if (output.toString().length >10){
            output = parseFloat(output).toFixed(8);
        }
        output = parseFloat(output);
        display.textContent = output;
        firstNumber = output;
        lastNumber = undefined;
        operator = undefined;
    } else {
        display.textContent = output;
        firstNumber = undefined;
        lastNumber = undefined;
        operator = undefined;
    }
    return output;
}
}

equalsBtn.addEventListener("click", operate);


// Keyboard Support
function inputNumberKey(evt){
    if (firstNumber === undefined && operator === undefined){
        display.textContent = evt.key;
        firstNumber = parseFloat(display.textContent);
    } else if (firstNumber != undefined && operator === undefined){
        if (firstNumber === "-0"){
            display.textContent = "-" + evt.key;
        } else if(firstNumber === 0){
            display.textContent = evt.key;
        } else {
            display.textContent = display.textContent + evt.key;
        }
        firstNumber = parseFloat(display.textContent);
    } else if (firstNumber != undefined && operator != undefined && lastNumber === undefined){
        display.textContent = evt.key;
        lastNumber = parseFloat(display.textContent);
    } else if (firstNumber != undefined && operator != undefined && lastNumber != undefined){
        if (lastNumber === "-0"){
            display.textContent = "-" + evt.key;
        } else if (lastNumber === 0) {
            display.textContent = evt.key;
        } else {
            display.textContent = display.textContent + evt.key;
        }
        lastNumber = parseFloat(display.textContent);
    } 
}

function addOperatorKey(evt){
    if (firstNumber != undefined){
        operator = evt.key;
    } 
}

document.addEventListener('keypress', function(event){
    if(event.key === '0' || event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || 
        event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9'){
            inputNumberKey(event);
    } else if (event.key === "/" || event.key === "*" || event.key === "-" || event.key === "+"){
            addOperatorKey(event);
    } else if (event.key === "."){
            if (firstNumber === undefined && operator === undefined ){
                display.textContent = "0."
                firstNumber = "0.";
            } else if (firstNumber != undefined && operator === undefined && !firstNumber.toString().includes(".")){
                display.textContent = `${firstNumber}.`
                firstNumber = `${firstNumber}.`
            } else if (firstNumber != undefined && operator != undefined && lastNumber === undefined){
                display.textContent = "0."
                lastNumber = "0.";
            } else if (firstNumber != undefined && operator != undefined && lastNumber != undefined  && !lastNumber.toString().includes(".")){
                display.textContent = `${lastNumber}.`
                lastNumber = `${lastNumber}.`
            }
    } else if (event.key === "%"){let value = parseFloat(display.textContent) / 100;
        if (value.toString().length >10){
            display.textContent = parseFloat(value).toFixed(8);
        } else{
            display.textContent = value
        }
        if (lastNumber === undefined){
            firstNumber = parseFloat(firstNumber) / 100;
        } else if (lastNumber != undefined){
            lastNumber = parseFloat(lastNumber) / 100;
        }
    } else if (event.key === "Backspace"){
            display.textContent = 0;
            firstNumber = undefined;
            lastNumber = undefined;
            operator = undefined;
    } else if (event.key === "="){
        operate();
    }
});



