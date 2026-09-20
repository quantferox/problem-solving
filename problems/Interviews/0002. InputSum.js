/*
 * 1abc2 => 12
 * pqr3stu8vwx => 38
 * a1h2c3d4e5f => 15
 * treb7uchet => 77
 * return 12+38+15+77 = 142
 */

const input = "1abc2 pqr3stu8vwx a1h2c3d4e5f treb7uchet";

/**
 * @param {String} input 
 */
const inputSum = (input) => {
    return input.split(" ").map(str => {
        const numbers = str.split("").filter(char => !isNaN(char))
        return numbers[0] + (numbers[numbers.length - 1] || numbers[0])
    }).reduce((acc, cur) => acc += +cur, 0);
}

console.log(inputSum(input));