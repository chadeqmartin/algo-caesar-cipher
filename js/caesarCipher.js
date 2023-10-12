exports.caesarCipher = function(str, indexChange) {
   if (indexChange < 0) {
        indexChange += 26
   }
    
    let strCopy = str.toLowerCase();
    let newStr = "";

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let indexDiff = 26 - indexChange;
    
    for (let i = 0; i < strCopy.length; i++){

        let tempIndex = alphabet.indexOf(strCopy[i]);

        if (tempIndex >= indexDiff){
            newStr += alphabet[tempIndex - indexDiff]
        } else if (tempIndex < indexDiff && tempIndex >= 0){
            newStr += alphabet[tempIndex + indexChange];
        } else {
            newStr += strCopy[i];
        }
    }
    for (let j = 0; j < str.length; j++){
        if (str[j] === str[j].toUpperCase()){
            newStr = newStr.replace(newStr[j], newStr[j].toUpperCase())
        }
    }
    return newStr;
};
