var restoreString = function (s, indices) {
    let indicesLength = indices.length;
    let str = new Array(indicesLength);
    for (let i = 0; i < indicesLength; i++) {
        str[indices[i]] = s[i];
    }
    return str.join("");
};