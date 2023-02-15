/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsMap = new Map();

    for (var i = 0; i < nums.length; i++) {
        if (numsMap[nums[i]]) {
            numsMap[nums[i]]++;
            return true;
        } else {
            numsMap[nums[i]] = 1;
        }
    }
    return false;
};