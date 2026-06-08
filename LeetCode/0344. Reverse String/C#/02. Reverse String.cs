void ReverseString(char[] s)
{
    int start = 0, end = s.Length - 1;
    while (start < end)
    {
        char tmp = s[start];
        s[start] = s[end];
        s[end] = tmp;
        start++;
        end--;
    }
}