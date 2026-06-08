function containsDuplicate(nums: number[]): boolean {
    nums.sort((a, b) => {
        return a - b;
    });
    for (let x = 0; x < nums.length - 1; x++) {
        if (nums[x] == nums[x + 1]) {
            return true;
        }
    }
    return false;
};