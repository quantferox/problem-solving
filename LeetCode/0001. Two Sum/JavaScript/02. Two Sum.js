var twoSum = function (nums, target) {
    const len = nums.length;
    const map = new Map();
    for (let x = 0; x < len; x++) {
        const complement = target - nums[x];
        if (map.has(complement)) {
            return [map.get(complement), x]
        }
        map.set(nums[x], x);
    }
    return null;
};