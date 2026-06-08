var runningSum = function (nums) {
    let x = nums.map((v, i) => {
        return i > 0 ? nums[i] += nums[i - 1] : v;
    });
    return x;
};