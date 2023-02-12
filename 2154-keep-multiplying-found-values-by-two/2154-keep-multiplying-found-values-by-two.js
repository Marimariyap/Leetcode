/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    if (!nums.includes(original)) {
        return original;
    } else {
        let sum = original * 2;

        while (nums.includes(sum)) {
            sum = sum * 2;
        }
        return sum;
    }
};