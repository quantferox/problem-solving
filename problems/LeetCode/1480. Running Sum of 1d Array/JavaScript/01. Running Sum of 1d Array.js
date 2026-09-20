var runningSum = function (nums) {
    for (let x = 1; x < nums.length; x++) {
        nums[x] += nums[x - 1];
    }
    return nums;
};