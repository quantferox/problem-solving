var plusOne = function (digits) {
    for (let x = digits.length - 1; x >= 0; x--) {
        if (digits[x] < 9) {
            digits[x]++;
            return digits;
        }
        digits[x] = 0;
    }
    digits.length = digits.length + 1;
    digits[digits.length - 1] = 0;
    digits[0] = 1;
    return digits;
}