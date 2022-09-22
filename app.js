let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));


let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;


buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.textContent = '0';
                break;

            case 'DEL':
                if (display.textContent != '0') {
                    display.textContent = display.textContent.slice(0, -1);
                }
                break;

            case '.':
                if (display.textContent.includes('.') === false) {
                    display.textContent += e.target.innerText;
                }
                break;

            case '+':
                if (display.textContent === '0') return
                document.querySelector('.add').style.background = '#754e18';
                display.textContent += e.target.innerText;
                firstOperator = '+';
                // firstOperand = display.textContent;
                // console.log(firstOperand);
                break;
            
            case '-':
                if (display.textContent === '0') return
                document.querySelector('.subtract').style.background = '#754e18';
                display.textContent += e.target.innerText;
                firstOperator = '-';
                break;
        
            case '*':
                if (display.textContent === '0') return
                document.querySelector('.multiply').style.background = '#754e18';
                display.textContent += e.target.innerText;
                firstOperator = '*';
                break;

            case '/':
                if (display.textContent === '0') return
                document.querySelector('.division').style.background = '#754e18';
                display.textContent += e.target.innerText;
                firstOperator = '/';
                break;
            
            case '=':
                if (firstOperator === '+') {
                    calculate('+');
                } else if (firstOperator === '-') {
                    calculate('-');
                } else if (firstOperator === '*') {
                    calculate('*');
                } else if (firstOperator === '/') {
                    calculate('/');
                }
                break;

            case '%':
                display.textContent = parseFloat(display.textContent) / 100;
                break;
                
            default:
                if (display.textContent.length <= 14) {
                    if (display.textContent === '0') {
                        display.textContent = e.target.innerText;
                    } else {
                        display.textContent += e.target.innerText;
                    }
                }
                document.querySelector('.add').style.background = '#E69C31';
                document.querySelector('.multiply').style.background = '#E69C31';
                document.querySelector('.subtract').style.background = '#E69C31';
                document.querySelector('.division').style.background = '#E69C31';

        }
    });
});

function calculate(operator) {
    equationArray = display.textContent.split(operator)
    firstOperand = parseFloat(equationArray[0]);
    secondOperand = parseFloat(equationArray[1]);
    let result = null;
    if (operator === '+') {
        result = firstOperand + secondOperand;
    } else if (operator === '-') {
        result = firstOperand - secondOperand;
    } else if (operator === '*') {
        result = firstOperand * secondOperand;
    } else if (operator === '/') {
        result = firstOperand / secondOperand;
    }
    display.textContent = result;
}