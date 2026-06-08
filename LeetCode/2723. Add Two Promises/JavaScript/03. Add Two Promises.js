var addTwoPromises = function (promise1, promise2) {
    return Promise.all([promise1, promise2]).then(([first, second]) => {
        return first + second;
    });
};