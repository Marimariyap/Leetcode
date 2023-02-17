/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let numMap = new Map();
    let arr = [];

    nums1.forEach((i) => {
        if (numMap.has(i)) {
            numMap.set(i, numMap.get(i) + 1);
        } else {
            numMap.set(i, 1);
        }
    });

    nums2.forEach((i) => {
        if (numMap.has(i)) {
            if (numMap.get(i) === 1) {
                numMap.delete(i);
            } else {
            numMap.set(i, numMap.get(i) - 1);
            }
            arr.push(i);
        }
    });
    return arr;
};