// Calculator




let windows = window;

const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
const clearButton = document.getElementById('clear');
const backButton = document.getElementById('backspace');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const equalButton = document.getElementById('equal');
const squareButton = document.getElementById('square');
const tavan = document.querySelector('#tavan');
const rootButton = document.getElementById('root');
const elementsList = document.querySelectorAll('li');
const elementsArray = Array.from(elementsList);


let lastOperation = '';
let memory = 0;

String.prototype.toEnglishDigit = function() {
    let find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    let replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let replaceString = this;
    let regex; for (let i = 0; i < find.length; i++) { regex = new RegExp(find[i], "g");
        replaceString = replaceString.replace(regex, replace[i]); } return replaceString; };


window.addEventListener('keydown' , test);
function test(event){
    console.log(event.key);
}




["click", "keydown"].forEach(ev=>{
    window.addEventListener(ev, function(event){
        if(ev == "click" || Number(event.key) || event.key == '.' || event.key == '0'){

                if (display.textContent.length > 15){
                    return;
                }


                let data = event.target.dataset.input || event.key;
                if (data) {

                    if (data === '.'){
                        if (!display.textContent.includes('.')){         // Boolean(".");  true
                            display.textContent += data;
                        }
                    }else{
                        display.textContent += data;
                        if (!display.textContent.includes('.')){
                            display.textContent = Number(display.textContent);
                        }
                    }
                }



                if (history !== 0){
                    elementsArray.forEach( elementsList => elementsList.addEventListener('click' , btn));
                    function btn(){
                        history = 0;
                        display.textContent = 0;
                        elementsArray.forEach( elementsList => elementsList.removeEventListener('click' , btn));
                    }
                }
        }
    });
});


//  ****************************  //


clearButton.addEventListener('click' , (event) => {
    display.textContent = 0 ;
    lastOperation = '';
    memory = 0;
});


minusButton.addEventListener('click' , () => {
    lastOperation = 'minus';
    memory = Number(display.textContent);
    display.textContent = 0;
});


plusButton.addEventListener('click' , () => {
    lastOperation = 'plus';
    memory = Number(display.textContent);
    display.textContent = 0;
});


divideButton.addEventListener('click' , () => {
    lastOperation = 'divide';
    memory = Number(display.textContent);
    display.textContent = 0;
});


multiplyButton.addEventListener('click' , () => {
    lastOperation = 'multiply';
    memory = Number(display.textContent);
    display.textContent = 0;
});

//*********************************//

window.addEventListener("keydown", (event) =>{
    if (event.key == 'Delete') {
        display.textContent = 0;
        lastOperation = '';
        memory = 0;

    }else if (event.key == '-') {
        lastOperation = 'minus';
        memory = Number(display.textContent);
        display.textContent = 0;

    }else if (event.key == '+') {
        lastOperation = 'plus';
        memory = Number(display.textContent);
        display.textContent = 0;

    }else if (event.key == '/') {
        lastOperation = 'divide';
        memory = Number(display.textContent);
        display.textContent = 0;

    }else if (event.key == '*') {
        lastOperation = 'multiply';
        memory = Number(display.textContent);
        display.textContent = 0;
    }else if(event.key == 'Backspace'){

        if (display.textContent.length == 1){
            display.textContent = 0;
        } else {
            display.textContent = display.textContent.substring(0 , display.textContent.length-1);
        }
    }else if (event.key == 'Enter') {

        if (lastOperation !== ''){
            let number = Number(display.textContent);

            if (lastOperation == 'minus'){
                display.textContent = memory - number;
                history = memory - number;
            }else if (lastOperation == 'plus'){
                display.textContent = memory + number;
                history = memory + number;
            }else if (lastOperation == 'divide'){
                display.textContent = memory / number;
                history = memory / number;
            }else if (lastOperation == 'tavan'){
                display.textContent = memory ** number;
                history = memory ** number;
            }else if (lastOperation == 'multiply'){
                display.textContent = memory * number;
                history = memory * number;
            }
            lastOperation = '';
        }
    }
  });





tavan.addEventListener('click' , () =>{
   lastOperation = 'tavan';
   memory = Number(display.textContent);
   display.textContent = 0;
});




let history = 0;
equalButton.addEventListener('click' , () => {
    if (lastOperation !== ''){
        let number = Number(display.textContent);

            if (lastOperation == 'minus'){
            display.textContent = memory - number;
            history = memory - number;
        }else if (lastOperation == 'plus'){
            display.textContent = memory + number;
            history = memory + number;
        }else if (lastOperation == 'divide'){
            display.textContent = memory / number;
            history = memory / number;
        }else if (lastOperation == 'tavan'){
            display.textContent = memory ** number;
            history = memory ** number;
        }else if (lastOperation == 'multiply'){
            display.textContent = memory * number;
            history = memory * number;
        }
        lastOperation = '';
    }
}) ;



backButton.addEventListener('click' , () =>{
   if (display.textContent.length == 1){
       display.textContent = 0;
   } else {
       display.textContent = display.textContent.substring(0 , display.textContent.length-1);
   }
});



squareButton.addEventListener('click' , () =>{
   display.textContent **= 2;
   lastOperation = '';
});



rootButton.addEventListener('click' , () =>{
   display.textContent = Math.sqrt(display.textContent);
   lastOperation = '';
});


