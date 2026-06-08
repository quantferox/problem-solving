var reverseString = function(s) {
    let startArray = 0;
    let endedArray = s.length - 1;
    while(startArray < endedArray){
        let tmp = s[startArray];
        s[startArray] = s[endedArray];
        s[endedArray] = tmp;
        startArray++;
        endedArray--;
    }
};