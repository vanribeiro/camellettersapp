export function upperLetters(txt){
    return txt.toUpperCase();
}

export function lowerLetters(txt) {  
    return txt.toLowerCase();
}

export function getOptions(opt, textToTransform) {
    let textValue = textToTransform;
    let transformedText = "";
    switch (opt) {
        case 'uppercase':
            transformedText = upperLetters(textValue);
            appendResult(transformedText);
            break;
        case 'lowercase':
            transformedText = lowerLetters(textValue);
            appendResult(transformedText);
        case 'camelcase':
            console.log('Capital Letters');
        default:
            break;
    }
}

export function appendResult(result) {
    let transformedText = document.querySelector('#changed-text');
    let resultAnswer = document.createElement('p');
    resultAnswer.textContent = result;
    transformedText.appendChild(resultAnswer);
}



function capitalLetters(txt){
    var txt = "Vanessa Cristiane Ribeiro";
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