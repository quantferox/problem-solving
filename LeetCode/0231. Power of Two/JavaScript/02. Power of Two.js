var isPowerOfTwo = function (n) {
    return Number.isInteger(Math.log10(n) / Math.log10(2));
};