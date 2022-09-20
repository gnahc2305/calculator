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

// seven_div.addEventListener('click', () => {
//     if (currentValue.length < maxDisplaydInteger) {
//         if (currentValue === '0') {
//             currentValue = '7';    
//         } else {
//             currentValue = currentValue + '7';
//         }
//         display_div.textContent = currentValue;
//     }
// })

function displayValue(value) {
    if (currentValue.length < maxDisplaydInteger) {
        if (currentValue === '0') {
            currentValue = value;
        } else {
            currentValue = currentValue + value;
        }
        display_div.textContent = currentValue;
    }
}

reset_div.addEventListener('click', () => {
    currentValue = '0';
    display_div.textContent = currentValue;
})
