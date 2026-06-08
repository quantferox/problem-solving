/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    const arrIdx = [];
    words.forEach((word, idx) => {
        if (word.includes(x)) {
            arrIdx.push(idx);
        }
    });
    return arrIdx;
};