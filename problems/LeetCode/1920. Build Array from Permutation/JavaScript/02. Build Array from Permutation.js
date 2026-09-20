var buildArray = function (nums) {
    let ans = [];
    let i = 0;
    let l = nums.length;
    while (i < l) {
        ans.push(nums[nums[i]]);
        i++;
    }
    return ans;
};