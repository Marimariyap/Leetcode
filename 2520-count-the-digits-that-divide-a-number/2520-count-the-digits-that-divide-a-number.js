/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let arr = String(num).split("");
    let count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (num % arr[i] === 0) {
            count++;
        }
    }
    return count;
};