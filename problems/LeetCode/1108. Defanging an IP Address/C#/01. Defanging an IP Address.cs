string DefangIPaddr(string address)
{
    return address.Replace(".", "[.]");
}