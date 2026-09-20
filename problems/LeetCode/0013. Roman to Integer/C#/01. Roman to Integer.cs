int RomanToInt(string s)
{
    Dictionary<string, int> romanMap = new Dictionary<string, int>
    {
        { "I", 1 },
        { "V", 5 },
        { "X", 10 },
        { "L", 50 },
        { "C", 100 },
        { "D", 500 },
        { "M", 1000 }
    };
    int result = 0;

    for (int x = 0; x < s.Length; x++)
    {
        if (x == s.Length - 1)
        {
            result += romanMap[s[x].ToString()];
            break;
        }
        if (romanMap[s[x].ToString()] >= romanMap[s[x + 1].ToString()])
            result += romanMap[s[x].ToString()];
        else
            result -= romanMap[s[x].ToString()];
    }
    return result;
}