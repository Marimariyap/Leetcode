/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let answer = [];
    for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if (target === nums[i] + nums[j]) {
        answer.push(i, j);
        }
    }
    }
    return [...new Set(answer)];
};