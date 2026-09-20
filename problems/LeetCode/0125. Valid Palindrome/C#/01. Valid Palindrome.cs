using System.Text.RegularExpressions;

bool IsPalindrome(string s)
{
    Regex regex = new Regex("[^0-9A-Za-z]");
    string clrBaseText = regex.Replace(s, string.Empty).ToLower();
    string clrReverseBaseText = new string(clrBaseText.ToCharArray().Reverse().ToArray());
    return clrBaseText == clrReverseBaseText;
}