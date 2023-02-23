/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let bigMax = nums[0];

    for (var i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
        bigMax = Math.max(nums[i], bigMax);
    }
    return bigMax;
};