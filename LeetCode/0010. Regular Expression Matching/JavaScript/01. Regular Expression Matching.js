var isMatch = function(s, p) {
    return new RegExp(p).exec(s) == s ? true : false;
};