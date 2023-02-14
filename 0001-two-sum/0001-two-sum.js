/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let numMap = new Map();

    for (var i = 0; i < nums.length; i++) {
        let min = target - nums[i];
        if (numMap.has(min)) {
            return [i, numMap.get(min)];
        }
        numMap.set(nums[i], i);
    }
};