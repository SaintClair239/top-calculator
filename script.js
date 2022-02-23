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

const numbers = [nine, eight, seven, six, five, four, three, two, one, zero];
const operators = [plus, minus, times, divide];
let chosenNumbers = [];
let chosenNumbers2=[];
let toCalculate = [];
let calculate = [];
let answer;

changeDisplayValue(numbers, operators)
operate()

function changeDisplayValue(numbers, operators){
    for (let i=0; i<numbers.length; i++) {
        numbers[i].addEventListener('click',() => {
            chosenNumbers += numbers[i].id
            botValue.textContent = chosenNumbers;  
        });
    } 
    
    for (let i=0; i<operators.length; i++)
    operators[i].addEventListener('click',() => {
            toCalculate.push(chosenNumbers);
            chosenNumbers = []
        calculate.push(operators[i].id);
        chosenNumbers2=toCalculate[0] + operators[i].id
        topValue.textContent=chosenNumbers2;

    });
}

function operate(){
    for (let i=0; i<operators.length; i++)
    operators[i].addEventListener('click',() => {
    
        if (toCalculate.length == 2){
            switch(calculate[0]){
                case "+":
                   answer = add(Number(toCalculate[0]),Number(toCalculate[1]))
                   toCalculate = []
                   toCalculate[0] = answer;
                   calculate.splice(0,1)
                    break;
                case "-":
                   answer = subtract(toCalculate[0], toCalculate[1])
                   toCalculate = []
                   toCalculate[0] = answer;
                   calculate.splice(0,1)
                    break;
                case "*":
                    answer = multiply(toCalculate[0], toCalculate[1])
                    toCalculate = []
                    toCalculate[0] = answer;
                    calculate.splice(0,1)
                    break;
                case "÷":
                    answer = division(toCalculate[0], toCalculate[1])
                    toCalculate = []
                    toCalculate[0] = answer;
                    calculate.splice(0,1)
                    break;
        }
        botValue.textContent = answer
        topValue.textContent = answer + operators[i].id
        }
    });
};

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