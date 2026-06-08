function numIdenticalPairs(nums: number[]): number {
    let uniquePair = 0;
    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            if (nums[x] == nums[y] && x < y) {
                uniquePair++;
            }
        }
    }
    return uniquePair;
};