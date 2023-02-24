/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    nums.push(0);
    let count = 0;
    let max = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }
    return max;
};