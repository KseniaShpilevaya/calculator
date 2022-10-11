let x = '';
let y = '';
let sign = '';
let flag = false;

const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '*', '/'];

const strDOM = document.querySelector('.str'); // получаем экран
const clDOM = document.querySelectorAll('.cl');
const CEDOM = Array.from(clDOM).find(item => {
    if (item.innerHTML === 'CE') {
        return true;
    }
    else {
        return false;
    }
})
CEDOM.addEventListener('click', () => { // очистка
    x = '';
    y = '';
    sign = '';
    flag = false;
    strDOM.innerHTML = '';
})
clDOM.forEach((item) => {
    if (item.innerHTML != 'CE')
    {
        item.addEventListener('click', () => {
            const buttonInput = item.innerHTML;
            if (num.includes(buttonInput)) { // если нажата цифра или точка
                if (y === '' && sign === '')
                {
                    if (x === '0') {
                        x = '';
                    }
                    if (buttonInput === '.') {
                        if (x === '') {
                            x = '0';
                        }
                        if (x.includes('.')) {
                            return;
                        }
                    }
                    x += buttonInput;
                    strDOM.innerHTML = x; 
                }
                else if (x !== '' && y !== '' && flag) {
                    y = buttonInput;
                    flag = false;
                    strDOM.innerHTML = y;
                }
                else {
                    if (y === '0') {
                        y = '';
                    }
                    if (buttonInput === '.') {
                        if (y === '') {
                            y = '0';
                        }
                        if (y.includes('.')) {
                            return;
                        }
                    }
                    y += buttonInput;
                    strDOM.innerHTML = y; 
                }
            }
            if (action.includes(buttonInput)) {
                sign = buttonInput;
                strDOM.innerHTML = sign; 
            }
    })
    }
})

const eqDOM = document.querySelector('.eq');
eqDOM.addEventListener('click', () => {
    let x_y;
    if (y !== '') {
        if (x === '') {
            x = '0';
        }
        switch (sign) {
            case '+': 
                x_y = (parseFloat(x) + parseFloat(y)).toFixed(6)*1;
                x = x_y.toString();
                break;
            case '-':
                x_y = (parseFloat(x) - parseFloat(y)).toFixed(6)*1;
                x = x_y.toString();
                break;
            case '*':
                x_y = (parseFloat(x) * parseFloat(y)).toFixed(6)*1;
                x = x_y.toString();
                break;
            case '/':
                if (y === '0') {
                    strDOM.innerHTML = 'Error';
                    x = '';
                    y = '';
                    sign = '';
                    return;
                }
                else {
                    x_y = (parseFloat(x) / parseFloat(y)).toFixed(6)*1;
                    x = x_y.toString();
                    break;
                }
        }
    }
    flag = true;
    
    strDOM.innerHTML = x;
    y = ''; 
})



