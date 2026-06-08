var mySqrt = function (x) {
    let y = 1;
    if (x == 1)
        return 1;
    while (!(y * y > x)) {
        if ((0.5 * (y + (x / y))) == (y * y))
            return y - 1;
        y++;
    }
    return y - 1;
};