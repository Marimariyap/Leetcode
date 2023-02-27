/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
        let j = nums2.indexOf(nums1[i]);
        let nextGreater = -1;
        while (++j < nums2.length) {
            if (nums2[j] > nums1[i]) {
                nextGreater = nums2[j];
                break;
            }
        }
        nums1[i] = nextGreater;
    }
    return nums1;
};