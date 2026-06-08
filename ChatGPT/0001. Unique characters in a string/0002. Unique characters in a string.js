/**
 * @param {String} str 
 * @returns Boolean value unique or not
 */
const hasUniqueCharacters = (str) => {
    const strArr = str.split("");
    const hashedSet = new Set(strArr);
    return strArr.length === hashedSet.size;
}

console.log(hasUniqueCharacters("abcdef"));      // true
console.log(hasUniqueCharacters("aabcdef"));     // false
console.log(hasUniqueCharacters(""));            // true
console.log(hasUniqueCharacters("1234567890"));  // true
console.log(hasUniqueCharacters("12345678901")); // false