var buildArray = function(nums) {
    let ans = [];
    for(let x = 0; x < nums.length; x++){
        ans.push(nums[nums[x]]);
    }
    return ans;
};