var longestCommonPrefix = function(strs) {
    strs.sort();
    let firstWord = strs[0];
    let secondWord = strs[strs.length - 1];
    let prefixLength = 0;
    while(prefixLength < firstWord.length && prefixLength < secondWord.length){
        if(firstWord[prefixLength] === secondWord[prefixLength]){
            prefixLength++;
        }
        else{
            break;
        }
    }
    return firstWord.substring(0, prefixLength);
};