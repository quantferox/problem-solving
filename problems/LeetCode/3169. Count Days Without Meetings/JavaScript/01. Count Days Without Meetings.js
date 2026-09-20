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

/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    if (!meetings.length) return days;
    const mergedMeetings = merge(meetings);
    let freeDays = 0, lastBusyDay = 0;
    for (let [start, end] of mergedMeetings) {
        freeDays += start - ++lastBusyDay;
        lastBusyDay = end;
    }
    return freeDays + days - lastBusyDay;
};