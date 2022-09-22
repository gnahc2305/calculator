let display = document.getElementById('display');

let buttons = Array.from(document.querySelectorAll('button'));


let displayValue = '0';
let firstOperand = null;



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
                
            default:
                if (display.textContent.length <= 9) {
                    if (display.textContent === '0') {
                        display.textContent = e.target.innerText;
                    } else {
                        display.textContent += e.target.innerText;
                    }
                }
        }
    });
});
