int Reverse(int x)
{
    if (x > 0)
    {
        char[] chars = x.ToString().ToCharArray();
        Array.Reverse(chars);
        if (Int32.MaxValue >= Int64.Parse(new string(chars)))
            return int.Parse(new string(chars));
        else
            return 0;
    }
    else
    {
        char[] chars = x.ToString().Replace("-", string.Empty).ToCharArray();
        Array.Reverse(chars);
        if (Int32.MaxValue >= Int64.Parse(new string(chars)))
            return int.Parse((new string(chars)).Insert(0, "-"));
        else
            return 0;
    }
}