int[] Shuffle(int[] nums, int n)
{
    int[] sortedArray = new int[nums.Length];
    int arrayIndex = 0;
    for (int i = 0; i < n; i++)
    {
        sortedArray[arrayIndex++] = nums[i];
        sortedArray[arrayIndex++] = nums[i + n];
    }
    return sortedArray;
}