import java.util.HashMap;
import java.util.Map;

class Solution {
  public int[] twoSum(int[] nums, int target) {
    int len = nums.length;
    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (int x = 0; x < len; x++) {
      int complement = target - nums[x];
      if (map.containsKey(complement)) {
        return new int[] { map.get(complement), x };
      }
      map.put(nums[x], x);
    }
    return null;
  }
}
