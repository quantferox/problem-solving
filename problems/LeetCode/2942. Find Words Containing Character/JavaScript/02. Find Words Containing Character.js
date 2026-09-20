/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    return words.reduce((acc, word, idx) => (
        word.includes(x) ? acc.concat(idx) : acc
    ), []);
};