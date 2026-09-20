var isPalindrome = function(s) {
    const regexPattern = new RegExp("[^0-9A-Za-z]", "g");
    let clrBaseText = s.replace(regexPattern, "").toLowerCase();
    let clrReverseBaseText = clrBaseText.split("").reverse().join("");
    return clrBaseText == clrReverseBaseText
};