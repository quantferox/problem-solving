var commonFactors = function (a, b) {
    let commonFactorValues = 0;
    const maxValue = Math.max(a, b);
    for (let i = 1; i <= maxValue; i++) {
        commonFactorValues += ((a % i == 0 && b % i == 0) ? 1 : 0);
    }
    return commonFactorValues;
};