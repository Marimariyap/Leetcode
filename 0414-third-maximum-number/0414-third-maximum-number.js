/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length < 3) {
        nums = Math.max(...nums);
        return nums;
    } else if (nums.length >= 3) {
        nums = nums.filter((e, i) => nums.indexOf(e) === i);
        if (nums.length < 3) {
            nums = Math.max(...nums);
            return nums;
        }else{
            nums = nums.sort((a, b) => b - a)[2];
            return nums;
        }
        
    }
};