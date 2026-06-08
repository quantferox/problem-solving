type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let finit = init;
    return {
        decrement: () => --finit,
        reset: () => (finit = init),
        increment: () => ++finit
    }
};