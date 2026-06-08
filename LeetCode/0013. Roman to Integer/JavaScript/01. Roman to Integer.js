var romanToInt = function (s) {
    let romanMaps = new Map();
    romanMaps.set("I", 1);
    romanMaps.set("V", 5);
    romanMaps.set("X", 10);
    romanMaps.set("L", 50);
    romanMaps.set("C", 100);
    romanMaps.set("D", 500);
    romanMaps.set("M", 1000);

    let result = 0;
    for (let x = 0; x < s.length; x++) {
        if (x === (s.length - 1)) {
            result += romanMaps.get(s[x].toString());
            break;
        }
        if (romanMaps.get(s[x].toString()) >= romanMaps.get(s[x + 1].toString())) {
            result += romanMaps.get(s[x].toString());
        }
        else {
            result -= romanMaps.get(s[x].toString());
        }
    }
    return result;
}