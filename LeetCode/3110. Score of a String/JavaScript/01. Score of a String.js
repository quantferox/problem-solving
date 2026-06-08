/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    return s.split("").map(ch => ch.charCodeAt()).reduce((acc, curr, idx, arr) => {
        return idx < arr.length - 1 ? acc + Math.abs(curr - arr[idx + 1]) : acc;
    }, 0);
};