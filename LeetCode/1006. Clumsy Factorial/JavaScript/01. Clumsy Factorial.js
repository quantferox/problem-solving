/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function (n) {
    return (
        (n <= 2) ? n :
            (n === 3 || n === 4) ? (n + 3) :
                (!(n % 4)) ? (n + 1) :
                    (n % 4 === 1 || n % 4 === 2) ? (n + 2) :
                        (n - 1)
    );
};