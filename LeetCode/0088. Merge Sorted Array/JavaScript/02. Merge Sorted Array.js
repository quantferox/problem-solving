var merge = function (nums1, m, nums2, n) {
    const nums2_clipped = nums2.splice(0, n);
    nums1.splice(m, nums1.length, ...nums2_clipped);
    nums1.sort((a, b) => {
        return a - b;
    });
};