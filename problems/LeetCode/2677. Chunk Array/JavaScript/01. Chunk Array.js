var chunk = function (arr, size) {
    let tempArr = [];
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        tempArr.push(arr[i]);
        if (tempArr.length == size) {
            resultArr.push(tempArr);
            tempArr = [];
        }
    }
    if (tempArr.length) {
        resultArr.push(tempArr);
    }
    return resultArr;
}