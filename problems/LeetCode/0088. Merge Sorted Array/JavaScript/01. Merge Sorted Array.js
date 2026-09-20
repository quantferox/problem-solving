var merge = function (nums1, m, nums2, n) {
    for (let x = m, y = 0; y < n; x++, y++) {
        nums1[x] = nums2[y];
    }
    nums1.sort((a, b) => {
        return a - b;
    })
};