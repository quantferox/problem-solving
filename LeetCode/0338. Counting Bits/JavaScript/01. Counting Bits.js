/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const arr = [];
    for (let idx = 0; idx <= n; idx++)
        arr.push(idx.toString(2));
    return arr.map(item => item.split("").reduce((prev, current) => prev + parseInt(current), 0));
};