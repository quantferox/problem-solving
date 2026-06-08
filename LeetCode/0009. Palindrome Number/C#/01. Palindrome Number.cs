bool IsPalindrome(int x)
{
    string normalString = x.ToString();
    string reverseString = new string(normalString.ToCharArray().Reverse().ToArray());
    if (normalString == reverseString)
    {
        return true;
    }
    else
    {
        return false;
    }
}