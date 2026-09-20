var fizzBuzz = function (n) {
    let ans = [];
    for (let x = 1; x <= n; x++) {
        (x % 3 == 0 && x % 5 == 0) ? ans.push("FizzBuzz")
            : (x % 3 == 0) ? ans.push("Fizz")
                : (x % 5 == 0) ? ans.push("Buzz")
                    : ans.push(x.toString());
    }
    return ans;
};