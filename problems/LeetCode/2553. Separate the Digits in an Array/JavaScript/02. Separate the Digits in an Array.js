var separateDigits = function (nums) {
    let new_nums = [];
    for (let x = 0; x < nums.length; x++) {
        new_nums.push(nums[x].toString().split(""));
    }
    return new_nums.flat();
};