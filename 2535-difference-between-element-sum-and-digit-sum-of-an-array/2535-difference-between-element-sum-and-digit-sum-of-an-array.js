/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0;
    let arr = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    arr = [...nums.join("")];

    for (var i = 0; i < arr.length; i++) {
        sum -= +arr[i];
    }
    return sum;
};