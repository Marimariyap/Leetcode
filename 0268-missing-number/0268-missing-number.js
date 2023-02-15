/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr = [];

    for (var i = 0; i <= nums.length; i++) {
        arr.push(i);
    }
    return arr.reduce((a, c) => a + c, 0) - nums.reduce((a, c) => a + c, 0);
};