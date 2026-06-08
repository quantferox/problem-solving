/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    const strLength = s.length - 1;
    let sum = 0;
    for (let idx = 0; idx < strLength; idx++) {
        sum += Math.abs(s.charCodeAt(idx) - s.charCodeAt(idx + 1));
    }
    return sum;
};