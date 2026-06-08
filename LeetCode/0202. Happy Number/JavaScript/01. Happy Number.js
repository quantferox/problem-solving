var isHappy = function (n) {
    let intSets = new Set();
    while (n != 1) {
        let newPowSum = 0;
        Array.from(n.toString()).forEach(function (k) {
            newPowSum += Math.pow(parseInt(k), 2);
        });
        if (intSets.has(newPowSum))
            return false;
        intSets.add(newPowSum);
        n = newPowSum;
    }
    return true;
};