/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    let num;
    do {
        num = (rand7() - 1) * 7 + rand7();
    } while (num > 40);
    return (num - 1) % 10 + 1;
}