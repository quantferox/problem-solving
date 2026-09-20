var map = function (arr, fn) {
    let upd_arr = [];
    for (let x = 0; x < arr.length; x++) {
        upd_arr.push(fn(arr[x], x));
    }
    return upd_arr;
};