const units = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
    1000000: "million",
    1000000000: "billion",
    1000000000000: "trillion",
    1000000000000000: "quadrillion"
};

const scales = Object.keys(units).reverse();

/**
 * @param {number} number The number to convert.
 * @returns {string} The English words representation of the number.
 */
const numberToWords = (number) => {
    if (number < 0) {
        return `minus ${numberToWords(Math.abs(number))}`;
    }
    else if (number < 20) {
        return units[number];
    }
    else if (number < 100) {
        const remainder = number % 10;
        return (units[Math.floor(number / 10) * 10]) + (remainder !== 0 ? " " + units[remainder] : "");
    }
    else if (number < 1000) {
        const remainder = number % 100;
        return (units[Math.floor(number / 100)]) + (" " + units[100]) + (remainder !== 0 ? " " + numberToWords(remainder) : "");
    }
    else {
        for (let scale of scales) {
            if (number >= scale) {
                const quotient = Math.floor(number / scale);
                const remainder = number % scale;
                return numberToWords(quotient) + (" " + units[scale]) + (remainder !== 0 ? " " + numberToWords(remainder) : "");
            }
        }
    }
}