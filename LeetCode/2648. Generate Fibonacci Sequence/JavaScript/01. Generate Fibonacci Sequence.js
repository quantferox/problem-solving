var fibGenerator = function* () {
    let firstValueFibo = 0;
    let secondValueFibo = 1;

    while (true) {
        yield firstValueFibo;
        [firstValueFibo, secondValueFibo] = [secondValueFibo, secondValueFibo + firstValueFibo];
    }
};