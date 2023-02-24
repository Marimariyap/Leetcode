/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = new Set(nums);
    const max_1 = Math.max(...set);

    if(set.size<3){
        return max_1;
    } else {
        set.delete(max_1);
        const max_2 = Math.max(...set);
        set.delete(max_2);
        return Math.max(...set);
    }
}