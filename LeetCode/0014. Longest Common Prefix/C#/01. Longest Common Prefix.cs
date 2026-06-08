string LongestCommonPrefix(string[] strs)
{
    Array.Sort(strs);
    string firstWord = strs[0];
    string secondWord = strs[strs.Length - 1];
    int prefixLength = 0;
    while (prefixLength < firstWord.Length && prefixLength < secondWord.Length)
    {
        if (firstWord[prefixLength] == secondWord[prefixLength])
            prefixLength++;
        else
            break;
    }
    return firstWord.Substring(0, prefixLength);
}