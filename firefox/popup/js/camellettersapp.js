import * as lib from './lib.js';

document.addEventListener('DOMContentLoaded', function(){

    let button = document.querySelector('#transform-text');
    let transformedText = document.querySelector('#changed-text');
    let input = document.querySelector('#text-to-be-transformed');
    let radios = document.getElementsByName('optioncase');
    let textValue = "";
    
    button.addEventListener('click', function(){
        var result = document.createElement('p');
        
        for(var i = 0; i < radios.length; i++){

            if(radios[i].value === "uppercase" && radios[i].checked){
                textValue = input.value;
                result.textContent = lib.upperLetters(textValue);
                transformedText.appendChild(result);
            } else if(radios[i].value === "lowercase" && radios[i].checked){
                textValue = input.value;
                result.textContent = lib.lowerLetters(textValue);
                transformedText.appendChild(result);
            } else{
                //concluir
            }
        }
        input.value = '';
    });

    input.addEventListener('keypress', function(event){
        if(event.keyCode == 13){
            var result = document.createElement('p');
        
        for(var i = 0; i < radios.length; i++){

            if(radios[i].value === "uppercase" && radios[i].checked){
                textValue = input.value;
                result.textContent = upperLetters(textValue);
                transformedText.appendChild(result);
            } else if(radios[i].value === "lowercase" && radios[i].checked){
                textValue = input.value;
                result.textContent = lowerLetters(textValue);
                transformedText.appendChild(result);
            } else{
                //concluir
            }
        }
        input.value = '';
        }
        
    });
    
    
});
