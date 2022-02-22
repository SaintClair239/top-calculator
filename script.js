const topValue = document.querySelector('.display-value-two'); 
const botValue = document.querySelector('.display-value');
const nine = document.getElementById('9');
const eight = document.getElementById('8');
const seven = document.getElementById('7');
const six = document.getElementById('6');
const five = document.getElementById('5');
const four = document.getElementById('4');
const three = document.getElementById('3');
const two = document.getElementById('2');
const one = document.getElementById('1');
const zero = document.getElementById('0');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const times = document.getElementById('*');
const divide = document.getElementById('÷');
const equals = document.getElementById('=');
const displayValuesBot = [nine, eight, seven, six, five, four, three, two, one, zero];
const displayValuesTop = [plus, minus, times, divide];

changeDisplayValue(displayValuesBot, displayValuesTop)

function changeDisplayValue(displayValuesBot, displayValuesTop){
    for (let i=0; i<displayValuesBot.length; i++) {
        displayValuesBot[i].addEventListener('click',() => {
            botValue.textContent+=displayValuesBot[i].id
        });
    } 
    
    for (let i=0; i<displayValuesTop.length; i++)
    displayValuesTop[i].addEventListener('click',() => {
        topValue.textContent=botValue.textContent + displayValuesTop[i].id
    });
}

function add(a,b){
    return a+b
};

function subtract(a,b){
    return a-b
};

function multiply(a,b){
    return a*b
};

function division(a,b){
    return a/b
};

let  array = [];
// const result = operate(array){
//     array.reduce(a,b){(a,b) =>  }
// }

function operate(array){
    const result = array.reduce(add)
    return result;
};
    
