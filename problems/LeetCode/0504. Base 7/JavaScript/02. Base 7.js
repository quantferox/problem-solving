var convertToBase7 = function (num) {
    if (num === 0) {
        return "0";
    }
    let base7 = [];
    let tempNumber = Math.abs(num);
    while (Math.floor(tempNumber) > 0) {
        base7.unshift(tempNumber % 7);
        tempNumber = Math.floor(tempNumber / 7);
    }
    if (num < 0) {
        base7.unshift("-");
        return base7.join("");
    }
    return base7.join("");
}
