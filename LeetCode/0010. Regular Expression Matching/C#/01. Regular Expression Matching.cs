bool IsMatch(string s, string p)
{
    return new Regex(p).Match(s).Value == s;
}