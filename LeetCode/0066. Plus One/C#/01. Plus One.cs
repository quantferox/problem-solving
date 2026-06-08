int[] PlusOne(int[] digits)
{
    BigInteger result = 1;
    string arrayValue = string.Empty;
    for (int x = 0; x < digits.Length; x++)
        arrayValue += digits[x];
    result += BigInteger.Parse(arrayValue);
    return result.ToString().Select(arrayNum => Convert.ToInt32(arrayNum) - 48).ToArray();
}