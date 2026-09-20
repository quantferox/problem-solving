class Solution {
  public int[] twoSum(int[] nums, int target) {
    for (int x = 0; x < nums.length; x++) {
      for (int y = 0; y < nums.length; y++) {
        if (x != y && nums[x] + nums[y] == target) {
          return new int[] { x, y };
        }
      }
    }
    return null;
  }
}
