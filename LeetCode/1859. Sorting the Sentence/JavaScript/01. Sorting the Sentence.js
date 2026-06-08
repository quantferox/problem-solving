var sortSentence = function (s) {
    return s.split(" ").sort((a, b) => {
        return a[a.length - 1] - b[b.length - 1];
    }).join(" ").replaceAll(new RegExp("\\d", "g"), "");
};