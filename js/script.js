const calculator = (button, display) => {
    switch (button.innerText) {
        case 'C':
            clearDisplay(display);
            break;
        case '=':
            calculate(display);
            break;
        case '÷':
            divideOperation(display, button);
            break;
        case '←':
            undoButton(display);
            break;
        default:
            update(display, button);
            break;
    }
}

const calculate = (display) => {
    display.innerText = eval(display.innerText);
}

const update = (display, button) => {
    if(display.innerText == 0) {
        display.innerText = '';
    }
    display.innerText += button.innerText;
}

const clearDisplay = (display) => {
    display.innerText = 0;
}

const divideOperation = (display) => {
   display.innerText += '/';
   
}

const undoButton = (display) => {
      let pointer = display.innerText.length;
      let newDisplay = display.innerText.substring(0, display.innerText.length -1);
      if (display.innerText.length === 1) {
        display.innerText = display.innerText;
      }else {        
        display.innerText = newDisplay;
      }
}

const changeTheme = () => {
    if(theme_button.checked){
        document.body.style.background  = 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)';
    } else {
        document.body.style.background = 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';

    } 
}

//Declarando variables
let display = document.getElementById('display');
let calcButtons = document.getElementsByClassName('calc-button');
let calcButtonsArray = Array.from(calcButtons);
    calcButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
        //console.log(button.innerText);
        calculator(button, display);
        })
    });

let theme_button = document.querySelector('#change_theme');
    theme_button.addEventListener('change', changeTheme, false);


