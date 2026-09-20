def commonFactors(self, a, b):
    commonFactorValues = 0
    maxValue = max(a, b)
    for i in range(1, maxValue + 1):
        commonFactorValues += 1 if a % i == 0 and b % i == 0 else 0
    return commonFactorValues
