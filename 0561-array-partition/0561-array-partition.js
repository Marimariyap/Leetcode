/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let arr = [];
    let max = 0;

    nums.sort((a, b) => a - b);

    for (var i = 0; i < nums.length; i += 2) {
        arr.push(nums.slice(i, i + 2));
    }

    for (var i = 0; i < arr.length; i++) {
        max += Math.min(...arr.at(i));
    }

    return max;
};