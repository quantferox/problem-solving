var shuffle = function (nums, n) {
    let sortedArray = [];
    let arrayIndex = 0;
    for (let i = 0; i < n; i++) {
        sortedArray[arrayIndex++] = nums[i];
        sortedArray[arrayIndex++] = nums[i + n];
    }
    return sortedArray;
};