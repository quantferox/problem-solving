/**
 * Double Array
 * @param {Array} arr 
 */
const doubleArray = (arr) => {
    /* return arr.map(item => item * 2); */
    const newDoubleArray = [];
    for (let idx = 0; idx < arr.length; idx++)
        newDoubleArray.push(arr[idx] * 2);
    return newDoubleArray;
}

console.log(doubleArray([1, 2, 3, 4])); // [2, 4, 6, 8]
console.log(doubleArray([0, -1, -2]));  // [0, -2, -4]