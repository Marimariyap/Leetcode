/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let arr = [];
    for (var i = 0; i < nums.length; i++) {
        let start = nums[i];
        while (i < nums.length - 1 && nums[i + 1] - nums[i] == 1) {
            i++;
        }
        if (start != nums[i]) {
            arr.push(`${start}->${nums[i]}`);
        } else {
            arr.push(start.toString());
        }
    }
    return arr;
};