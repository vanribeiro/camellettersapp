export function upperLetters(txt){
    return txt.toUpperCase();
}

export function lowerLetters(txt) {  
    return txt.toLowerCase();
}

export function capitalizeLetters(txt){
    var words = txt.split(" ");
    var capitalArray = [words.length];
    var capitalLetter = "";
    var anothersLetters = "";
    var word = "";
    var allWordsTogether = "";
    for(var j = 0; j < words.length; j++){
        capitalLetter = words[j].substring(0, 1).toUpperCase();
        anothersLetters = words[j].substring(1, (words[j].length));
        word = capitalLetter + anothersLetters;
        capitalArray[j] = word;
        allWordsTogether += capitalArray[j].concat() + " ";
    }
    return allWordsTogether;
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
            break;
        case 'camelcase':
            transformedText = capitalizeLetters(textValue);
            appendResult(transformedText);
            break;
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

export function isEmpty(txt) {
    if(txt == ''){
        return true;
    }
}
