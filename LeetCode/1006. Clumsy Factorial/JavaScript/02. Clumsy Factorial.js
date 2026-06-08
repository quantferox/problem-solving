/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function (n) {
    const stack = [n];
    let operator = "*";
    for (let idx = n - 1; idx >= 1; idx--) {
        switch (operator) {
            case "*":
                stack.push(stack.pop() * idx);
                operator = "/";
                break;
            case "/":
                stack.push(Math.trunc(stack.pop() / idx))
                operator = "+";
                break;
            case "+":
                stack.push(idx)
                operator = "-";
                break;
            case "-":
                stack.push(-idx);
                operator = "*";
                break;
        }
    }
    return stack.reduce((acc, currentValue) => acc + currentValue, 0);
};