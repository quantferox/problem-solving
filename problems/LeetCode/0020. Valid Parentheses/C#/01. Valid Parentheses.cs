bool IsValid(string s)
{
    Stack<char> stackBracket = new Stack<char>();
    foreach (char bracketChar in s)
    {
        switch (bracketChar)
        {
            case '(':
            case '[':
            case '{':
                stackBracket.Push(bracketChar);
                break;
            case ')':
                if (stackBracket.Count == 0 || stackBracket.Pop() != '(')
                {
                    return false;
                }
                break;
            case ']':
                if (stackBracket.Count == 0 || stackBracket.Pop() != '[')
                {
                    return false;
                }
                break;
            case '}':
                if (stackBracket.Count == 0 || stackBracket.Pop() != '{')
                {
                    return false;
                }
                break;
        }
    }
    return stackBracket.Count == 0;
}