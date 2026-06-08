/**
 * Tree
 * @param {Number} rows 
 * @param {String} symbol 
 * @param {Boolean} isReversed 
 * @returns {String}
 */
const treeGenerate = (rows, symbol, isReversed) => {
    const tree = [];
    for (let x = 1; x <= rows; x++)
        tree.push(" ".repeat(rows - x) + symbol.repeat(2 * x - 1) + " ".repeat(rows - x))
    return !isReversed ? tree.join("\n") : tree.reverse().join("\n");
}