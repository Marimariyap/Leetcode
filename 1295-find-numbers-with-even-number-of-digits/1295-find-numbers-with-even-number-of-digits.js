/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let arr = [];
    let count = 0;
    for (var i = 0; i < nums.length; i++) {
        arr = nums[i].toString();
        if (arr.length % 2 === 0) {
            count++;
        }
    }
    return count;
};