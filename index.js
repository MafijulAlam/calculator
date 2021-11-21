let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button')
let screenValue = '';
for( item of buttons){
    item.addEventListener('click', (cb) => {
        buttonText = cb.target.innerText;
        // if(buttonText == '*'){
        //     screenValue += buttonText;
        //     screen.value = screenValue;
         if(buttonText == 'AC'){
            screenValue = ''
            screen.value = screenValue
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    }) 
}