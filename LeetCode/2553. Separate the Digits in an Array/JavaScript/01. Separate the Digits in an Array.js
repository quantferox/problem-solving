var separateDigits = function (nums) {
    let new_nums = [];
    nums.map((v) => {
        new_nums.push(v.toString().split(""));
    })
    return new_nums.flat();
};