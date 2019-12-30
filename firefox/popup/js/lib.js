export function upperLetters(txt){
    return txt.toUpperCase();
}

export function lowerLetters(txt) {  
    return txt.toLowerCase();
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