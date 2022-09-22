const display_div = document.querySelector('.display');
const reset_div = document.querySelector('.reset');
const positiveOrNegative_div = document.querySelector('.positiveOrNegative');
const percentage_div = document.querySelector('.percentage');
const division_div = document.querySelector('.division');
const seven_div = document.querySelector('.seven');
const eight_div = document.querySelector('.eight');
const nine_div = document.querySelector('.nine');
const multiply_div = document.querySelector('.multiply');
const four_div = document.querySelector('.four');
const five_div = document.querySelector('.five');
const six_div = document.querySelector('.six');
const subtract_div = document.querySelector('.subtract');
const one_div = document.querySelector('.one');
const two_div = document.querySelector('.two');
const three_div = document.querySelector('.three'); 
const add_div = document.querySelector('.add');
const zero_div = document.querySelector('.zero');
const decimal_div = document.querySelector('.decimal');
const equals_div = document.querySelector('.equals');

//function that takes the operator and two numbers, returns the result
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
    }
}

let currentValue = '0';
let maxDisplaydInteger = 9;
let firstValue = '0';
let lastValue = '0';
let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;

//displays the value of the number in the display
function displayValue(value) {
    if (currentValue.length < maxDisplaydInteger) {
        if (currentValue === '0') {
            currentValue = value;
        } else {
            currentValue = currentValue + value;
        }
        display_div.textContent = currentValue;
    }
    add_div.style.background = '#E69C31';
    subtract_div.style.background = '#E69C31';
    multiply_div.style.background = '#E69C31';
    division_div.style.background = '#E69C31';
}

//adds a AC button that sets the display value to 0
reset_div.addEventListener('click', () => {
    location.reload();
})

//makes the decimal point work only once
function decimalPoint() {
    if (currentValue.includes('.') === false) {
        currentValue = currentValue + '.';
    }
    display_div.textContent = currentValue;
}

// adds or removes a minus sign infront of the current value
function changeSign() {
    if (currentValue === '0') {
        currentValue = '-';
    } else if (currentValue.includes('-') === false) {
        currentValue = '-' + currentValue;
    } else if (currentValue.includes('-')) {
        currentValue = currentValue.replace('-', '');
    }
    display_div.textContent = currentValue;
}

equals_div.addEventListener('click', () => {
    if (addition) {
        calculate('+', addition);
    } else if (subtraction) {
        calculate('-', subtraction);
    } else if (multiplication) {
        calculate('*', multiplication);
    } else if (division) {
        calculate('/', division);
    }
})


function displayFinalValue(value) {
    if (currentValue.length < maxDisplaydInteger) {
        if (currentValue === '0') {
            currentValue = value;
        } else {
            currentValue = value;
        }
        display_div.textContent = currentValue;
    }
}

function setupTheListener(div) {
    div.style.background = '#754e18';
    firstValue = currentValue;
    display_div.textContent = firstValue;
    currentValue = '0';
}

function calculate(typeOFOperator, booleanOfOperator) {
    lastValue = currentValue;
    let firstValueInt = parseFloat(firstValue);
    let lastValueInt = parseFloat(lastValue);
    let finalValue = operate(typeOFOperator, firstValueInt, lastValueInt);

    if (firstValue.includes('-')) {
        firstValueInt = -Math.abs(firstValueInt);
        finalValue = operate(typeOFOperator, firstValueInt, lastValueInt);
        displayFinalValue(finalValue.toString());
        booleanOfOperator = false;
    } else if (lastValue.includes('-')) {
        firstValueInt = Math.abs(firstValueInt);
        finalValue = operate(typeOFOperator, firstValueInt, lastValueInt);
        displayFinalValue(finalValue.toString());
        booleanOfOperator = false;
    } else {
        displayFinalValue(finalValue.toString());
        booleanOfOperator = false;
    }
}

add_div.addEventListener('click', () => {
    setupTheListener(add_div);
    addition = true;
    newCalculation('+');
})

function newCalculation(typeOFOperator) {
    lastValue = currentValue;
    let firstValueInt = parseFloat(firstValue);
    console.log(firstValueInt + firstValueInt);
}

subtract_div.addEventListener('click', () => {
    setupTheListener(subtract_div);
    subtraction = true;
})

multiply_div.addEventListener('click', () => {
    setupTheListener(multiply_div);
    multiplication = true;
})

division_div.addEventListener('click', () => {
    setupTheListener(division_div);
    division = true;
})

percentage_div.addEventListener('click', () => {
    result = parseFloat(currentValue) / 100;
    displayFinalValue(result.toString());
})