const data = [
    "wHat_is_Good_day",
    "What_Is_good_Day",
    "what-is_Good-Day",
    "What_iS_good-dAy"
]

/**
 * @param {string} text 
 * @param {bool} isLower 
 * @returns 
 */
const toCamelCase = (text, isLower) => {
    return text.replace(/[^A-Za-z0-9]/g, "_").split("_").map((word, index) => (
        index === 0 ?
            isLower ?
                word[0].toLowerCase() + word.slice(1).toLowerCase() :
                word[0].toUpperCase() + word.slice(1).toLowerCase() :
            word[0].toUpperCase() + word.slice(1).toLowerCase()
    )).join("");
}

data.forEach((item) => {
    console.log(toCamelCase(item, false));
});