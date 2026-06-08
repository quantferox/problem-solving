var countDigits = function (num) {
    let result = 0;
    let numChars = num.toString().split("");
    for (let numChar of numChars) {
        if (num % parseInt(numChar) == 0) {
            result++;
        }
    }
    return result;
};