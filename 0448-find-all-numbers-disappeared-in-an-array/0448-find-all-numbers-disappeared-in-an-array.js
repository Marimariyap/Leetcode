/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let maps = new Map();
    let nums2 = [];
    let arr = [];

    for (var i = 1; i <= nums.length; i++) {
        nums2.push(i);
    }

    nums.forEach((i) => {
        if (maps.has(i)) {
            maps.set(i, maps.get(i) + 1);
        } else {
            maps.set(i, 1);
        }
    });

    nums2.forEach((i) => {
        if (!maps.has(i)) {
            arr.push(i);
        }
    });
    return arr;
};