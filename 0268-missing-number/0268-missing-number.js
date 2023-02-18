/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length;
    const Sum = n * (n + 1) / 2;
    const numsSum = nums.reduce((acc, val) => acc + val, 0);
    return Sum - numsSum;
};