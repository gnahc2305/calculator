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
                firstOperand = display.textContent;
                console.log(firstOperand);

                break;
                
            default:
                if (display.textContent.length <= 9) {
                    if (display.textContent === '0') {
                        display.textContent = e.target.innerText;
                    } else {
                        display.textContent += e.target.innerText;
                    }
                }
                document.querySelector('.add').style.background = '#E69C31';

        }
    });
});

function calculate(operator) {

}
