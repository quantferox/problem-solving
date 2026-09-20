var createCounter = function (init) {
    let finit = init;
    return {
        decrement: () => --finit,
        reset: () => (finit = init),
        increment: () => ++finit
    }
};