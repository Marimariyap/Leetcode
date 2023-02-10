/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let num_2 = +String(num).split("").reverse().join("");
    let num_3 = +String(num_2).split("").reverse().join("");
   
    if (num === num_3) {
        return true;
    } else {
        return false;
    }
};