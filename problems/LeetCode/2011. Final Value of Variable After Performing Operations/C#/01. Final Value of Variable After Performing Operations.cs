int FinalValueAfterOperations(string[] operations)
{
    int initValue = 0;
    foreach (string operation in operations)
    {
        if (operation == "--X" || operation == "X--")
        {
            initValue--;
        }
        else
        {
            initValue++;
        }
    }
    return initValue;
}