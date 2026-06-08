/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    return intervals.reduce((res, cur) => {
        const last = res[res.length - 1];
        if (last && cur[0] <= last[1]) last[1] = Math.max(last[1], cur[1]);
        else res.push(cur);
        return res;
    }, []);
};