int CountDigits(int num)
{
    int result = 0;
    char[] numChars = num.ToString().ToCharArray();
    foreach (char numChar in numChars)
    {
        if (num % int.Parse(numChar.ToString()) == 0)
        {
            result++;
        }
    }
    return result;
}