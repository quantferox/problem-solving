var chunk = function (arr, size) {
    let tempArr = [];
    let resultArr = [];
    arr.map(function (val) {
        tempArr.push(val);
        if (tempArr.length == size) {
            resultArr.push(tempArr);
            tempArr = [];
        }
    });
    if (tempArr.length) {
        resultArr.push(tempArr);
    }
    return resultArr;
}