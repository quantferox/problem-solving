var finalValueAfterOperations = function (operations) {
    let initValue = 0;
    operations.forEach(operation => {
        if (operation == "--X" || operation == "X--") {
            initValue--;
        }
        else {
            initValue++;
        }
    });
    return initValue;
};