/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let maps = new Map();
    let arr = [];

    nums1.forEach((i) => {
        if (maps.has(i)) {
            maps.set(i, maps.get(i) + 1);
        } else {
            maps.set(i, 1);
        }
    });

    nums2.forEach((i) => {
        if (maps.has(i)) {
            arr.push(i);
        }
    });
    return [...new Set(arr)];
};