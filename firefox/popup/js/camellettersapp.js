import * as lib from './lib.js';

document.addEventListener('DOMContentLoaded', function(){
    let input = document.querySelector('#text-to-be-transformed');
    let button = document.querySelector('#transform-text');
    let radio = document.getElementsByName('optioncase');
    
    button.addEventListener('click', allOptions);
    input.addEventListener('keypress', function (event) {
        let valueTxt = input.value;
        if(event.keyCode == 13){
            allOptions();
            if(!lib.isEmpty(valueTxt)){
                lib.appendResult(lib.upperLetters(valueTxt));
            }
        }
    });


    function allOptions () { 
        let option = "";
        for(var i = 0; i < radio.length; i++){
            if(radio[i].checked){
                option = radio[i].value;
                lib.getOptions(option, input.value);
            }
        }
        input.value = '';
     }

});
