document.addEventListener('DOMContentLoaded', function(){

    let button = document.querySelector('#transform-text');
    let transformedText = document.querySelector('#changed-text');
    let input = document.querySelector('#text-to-be-transformed');
    let radios = document.getElementsByName("optioncase");
    let textValue = "";
    
    button.addEventListener('click', function(){
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

    
    
    function upperLetters(txt){
        return txt.toUpperCase();
    }
    
    function lowerLetters(txt) {  
        return txt.toLowerCase();
    }
    
    /**
     * Concluir
     */
    function capitalLetters(txt){
        var txt = "vanessa Cristiane Ribeiro";
        var words = txt.split(" ");
        var capitalArray = [words.length];
        var capital = "";
        var _restName = "";
        var completeStr = "";
        for(var j = 0; j < words.length; j++){
            capital = words[j].substring(0, 1).toUpperCase();
            _restName = words[j].substring(1, (words[j].length));
            completeStr = capital + _restName;
            capitalArray[j] = completeStr;
            console.log(capitalArray.concat());
        }

        return 
    }
    
});
