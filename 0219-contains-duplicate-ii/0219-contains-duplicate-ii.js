/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hashMap=new Map();
    for(var i=0;i<nums.length;i++){
        if(hashMap.has(nums[i])){
          if(Math.abs(i-hashMap.get(nums[i]))<=k){
            return true;
          }else{
             hashMap.set(nums[i], i);
          }
        }else{ 
            hashMap.set(nums[i],i);
        }
    }
    return false;  
};