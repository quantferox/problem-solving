var numJewelsInStones = function (jewels, stones) {
    let jCount = 0;
    for (let x = 0; x <= stones.length - 1; x++) {
        for (let y = 0; y <= jewels.length - 1; y++) {
            if (jewels[y] == stones[x]) {
                jCount++;
            }
        }
    }
    return jCount;
};