/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum_1 = nums.reduce((a, c) => a + c, 0);
    let sum_2 = nums.join("").split("").reduce((a, c) => a + +c, 0);
    return sum_1 - sum_2;
};