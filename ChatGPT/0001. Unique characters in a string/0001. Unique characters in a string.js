/**
 * @param {String} str 
 * @returns Boolean value unique or not
 */
const hasUniqueCharacters = (str) => {
    for (let idx = 0; idx < str.length; idx++) {
        if (str.match(new RegExp(str[idx], "g")).length > 1)
            return false;
    }
    return true;
}

console.log(hasUniqueCharacters("abcdef"));      // true
console.log(hasUniqueCharacters("aabcdef"));     // false
console.log(hasUniqueCharacters(""));            // true
console.log(hasUniqueCharacters("1234567890"));  // true
console.log(hasUniqueCharacters("12345678901")); // false