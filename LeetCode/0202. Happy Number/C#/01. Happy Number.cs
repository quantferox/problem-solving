bool IsHappy(int n)
{
    HashSet<int> intSets = new HashSet<int>();
    while (n != 1)
    {
        int newPowSum = 0;
        foreach (char k in n.ToString().ToCharArray())
            newPowSum += (int)Math.Pow(int.Parse(k.ToString()), 2);
        if (intSets.Contains(newPowSum))
            return false;
        intSets.Add(newPowSum);
        n = newPowSum;
    }
    return true;
}