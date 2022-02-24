const topValue = document.querySelector('.display-value-two'); 
const botValue = document.querySelector('.display-value');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
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

const decimal  = document.getElementById('.');
const numbers = [nine, eight, seven, six, five, four, three, two, one, zero];
const operators = [plus, minus, times, divide];
let currentNumber = "";
let previousNumber = "";
let currentOperator = "";

decimal.addEventListener('click', addDecimal);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deletePrevious)

equals.addEventListener('click', ()=>{
    if (currentNumber !== "" && previousNumber !== ""){
        previousNumber = Number(previousNumber);
        currentNumber = Number(currentNumber);
    
        switch(currentOperator){
            case "+":
                previousNumber += currentNumber
                break;
            case "-":
                previousNumber -= currentNumber
                break;
            case "*":
                previousNumber *= currentNumber
                break;
            case "÷":
                if (currentNumber == 0){
                    currentNumber = "";
                    return botValue.textContent ="ERROR"
                    
                }
                previousNumber /= currentNumber
                break;
        }
        previousNumber = previousNumber.toFixed(3)
        previousNumber = parseFloat(previousNumber)
        previousNumber = previousNumber.toString()
        currentNumber = previousNumber
        botValue.textContent = currentNumber
        topValue.textContent = ""
        previousNumber = ""      
    } 

})

for (let i=0; i<numbers.length; i++) {
    numbers[i].addEventListener('click', ()=>{
        if(currentNumber.length < 11){
            currentNumber += numbers[i].id
            botValue.textContent = currentNumber
        }
    })
}
    
for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener('click',() => {
        if (currentNumber !== "" && previousNumber !== ""){
            operate()
            currentOperator = operators[i].id;
            topValue.textContent = previousNumber + " " + operators[i].id;
        } else if (currentNumber !== ""){
            currentOperator = operators[i].id
            previousNumber = currentNumber
            topValue.textContent=previousNumber + " " + operators[i].id;
            currentNumber = "";
        } else {
            currentOperator = operators[i].id
            topValue.textContent=previousNumber + " " + operators[i].id;
        }
    });
}

function operate(){
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    switch(currentOperator){
        case "+":
            previousNumber += currentNumber
            break;
        case "-":
            previousNumber -= currentNumber
            break;
        case "*":
            previousNumber *= currentNumber
            break;
        case "÷":
            if (currentNumber == 0){
                currentNumber = "";
                return botValue.textContent ="ERROR"
            }
            previousNumber /= currentNumber
            break;
    }
    previousNumber = previousNumber.toFixed(3)
    previousNumber = parseFloat(previousNumber)
    previousNumber = previousNumber.toString()
    botValue.textContent = previousNumber
    topValue.textContent = "";
    currentNumber = ""
};

function clear(){
    previousNumber = "";
    currentNumber = "";
    currentOperator = "";
    topValue.textContent = "";
    botValue.textContent = "";
}

function deletePrevious(){
    if (currentNumber.length > 0) {
        currentNumber = currentNumber.substring(0, currentNumber.length -1)
        botValue.textContent = currentNumber
        console.log(currentNumber)
    }
}

function addDecimal(){
    if(currentNumber.length>0 && currentNumber.includes('.') == false){
        currentNumber += decimal.id
        botValue.textContent = currentNumber;
    }
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