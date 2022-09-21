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


function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//function that takes the operator and two numbers, returns the result
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return substract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}

let currentValue = '0';
let maxDisplaydInteger = 9;
let firstValue = '0';
let lastValue = '0';
let addition = false;

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
}

//adds a AC button that sets the display value to 0
reset_div.addEventListener('click', () => {
    currentValue = '0';
    display_div.textContent = currentValue;
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
    } else if (currentValue.includes('-') === false) {
        currentValue = '-' + currentValue;
    } else if (currentValue.includes('-')) {
        currentValue = currentValue.replace('-', '');
    }
    display_div.textContent = currentValue;
}

add_div.addEventListener('click', () => {
    add_div.style.background = '#754e18';
    firstValue = currentValue;
    displayLastValue(add_div);
    addition = true;
})

equals_div.addEventListener('click', () => {
    if (addition === true) {
        lastValue = currentValue;
        console.log(`The first Value is ${firstValue} and the last Value is ${lastValue}`);
    }

})

function displayLastValue(div) {
    display_div.textContent = firstValue;
    currentValue = '0';
}