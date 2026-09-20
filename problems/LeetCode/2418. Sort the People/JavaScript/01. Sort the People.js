var sortPeople = function (names, heights) {
    let assocArray = [];

    for (let x = 0; x < names.length; x++) {
        assocArray.push([names[x], heights[x]]);
    }
    assocArray.sort(function (a, b) {
        return b[1] - a[1];
    });

    return assocArray.map(el => el[0])
};