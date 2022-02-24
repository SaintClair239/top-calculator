const topValue = document.querySelector('.display-value-two'); 
const botValue = document.querySelector('.display-value');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

//buttons for numbers and operators and others
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
const divide = document.getElementById('/');
const equals = document.getElementById('=');
const decimal  = document.getElementById('.');

const numbers = [nine, eight, seven, six, five, four, three, two, one, zero];
const operators = [plus, minus, times, divide];
let currentNumber = "";
let previousNumber = "";
let currentOperator = "";

// number functionality

for (let i=0; i<numbers.length; i++) {
    document.addEventListener('keydown', (e)=>{ //keyboard functionality
        if(currentNumber.length < 11){
            if (e.code == `Digit${numbers[i].id}`){
                currentNumber += numbers[i].id
                botValue.textContent = currentNumber
            }       
        }
    }) 
    numbers[i].addEventListener('click', ()=>{ //click functionality
        if(currentNumber.length < 11){ //limits the number of digits to 11
            currentNumber += numbers[i].id
            botValue.textContent = currentNumber
        }
    })
}

// clicking operators functionality
for (let i=0; i<operators.length; i++) {
    document.addEventListener('keydown', (e)=>{ //keyboard functionality
        if (e.key == `${operators[i].id}`){
            if (currentNumber !== "" && previousNumber !== ""){ //checks if there are 2 operands to evaluate
                operate() 
                if (botValue.textContent !== 'ERROR') { //checks if value was not divided by 0 and change values appriopriately
                    botValue.textContent = previousNumber
                    topValue.textContent = "";
                    currentNumber = ""
                }
                currentOperator = operators[i].id;
                topValue.textContent = previousNumber + " " + operators[i].id; 
            } else if (currentNumber !== ""){ //checks if there is no operand yet, only assign values if none
                currentOperator = operators[i].id
                previousNumber = currentNumber
                topValue.textContent=previousNumber + " " + operators[i].id;
                currentNumber = "";
            } else {
                currentOperator = operators[i].id
                topValue.textContent=previousNumber + " " + operators[i].id;
            } 
        }
    })
    operators[i].addEventListener('click',() => {
        if (currentNumber !== "" && previousNumber !== ""){ //checks if there are 2 operands to evaluate
            operate() 
            if (botValue.textContent !== 'ERROR') { //checks if value was not divided by 0 and change values appriopriately
                botValue.textContent = previousNumber
                topValue.textContent = "";
                currentNumber = ""
            }
            currentOperator = operators[i].id;
            topValue.textContent = previousNumber + " " + operators[i].id; 
        } else if (currentNumber !== ""){ //checks if there is no operand yet, only assign values if none
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

document.addEventListener('keydown', (e)=>{  //keyboard functionality
    if(e.key == `${equals.id}`) {
        if (currentNumber !== "" && previousNumber !== ""){
            operate()
            if (botValue.textContent !== 'ERROR') {
                currentNumber = previousNumber
                botValue.textContent = currentNumber
                topValue.textContent = ""
                previousNumber = ""
            }  
        }
    }    
})

equals.addEventListener('click', ()=>{ 
    if (currentNumber !== "" && previousNumber !== ""){
        operate()
        if (botValue.textContent !== 'ERROR') {
            currentNumber = previousNumber
            botValue.textContent = currentNumber
            topValue.textContent = ""
            previousNumber = ""
        }  
    }  
})

decimal.addEventListener('click', addDecimal);
document.addEventListener('keydown', (e)=>{ //keyboard functionality
    if(e.key == `${decimal.id}`) {
        addDecimal()
    } 
});

clearBtn.addEventListener('click', clear);
document.addEventListener('keydown', (e)=>{ //keyboard
    if(e.key == 'Delete'){
        clear()
    }
});


deleteBtn.addEventListener('click', deletePrevious)
document.addEventListener('keydown',(e)=>{ //keyboard
    if(e.key == 'Backspace'){
        deletePrevious()
    }
})

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
        case "/":
            if (currentNumber === 0){
                currentNumber = "";
                return botValue.textContent ="ERROR"
            }
            previousNumber /= currentNumber
            break;
    }
    previousNumber = previousNumber.toFixed(3)
    previousNumber = parseFloat(previousNumber)
    previousNumber = previousNumber.toString()
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