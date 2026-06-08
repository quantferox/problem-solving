var reverse = function (x) {
    if (x > 0) {
        let chars = x.toString().split("").reverse().join("");
        let intResult = parseInt(chars);
        if (intResult <= Math.pow(2, 31) - 1) {
            return intResult;
        }
        else {
            return 0;
        }
    }
    else {
        let chars = x.toString().replace("-", "").split("").reverse().join("");
        let intResult = parseInt("-" + chars);
        if (intResult >= -(Math.pow(2, 31) - 1)) {
            return intResult;
        }
        else {
            return 0;
        }
    }
}