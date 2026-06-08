var toLowerCase = function (s) {
    let str_arr = s.split("");
    for (let x = 0; x < str_arr.length; x++) {
        if (str_arr[x].charCodeAt(0) >= 65 && str_arr[x].charCodeAt(0) <= 90) {
            str_arr[x] = String.fromCharCode(str_arr[x].charCodeAt(0) + 32);
        }
    }
    return str_arr.join("");
};