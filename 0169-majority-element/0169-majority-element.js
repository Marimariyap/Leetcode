/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    } else {

        nums.sort((a, b) => a - b);

        let nums_2 = nums.slice(0, nums.length / 2);
        let nums_3 = nums.slice(nums.length / 2, nums.length);

        if (nums_2[0] !== nums_2[-1]) {
            return nums_3[0];
        } else if (nums_3[0] !== nums_3[-1]) {
            return nums_2[0];
        }
    }

};