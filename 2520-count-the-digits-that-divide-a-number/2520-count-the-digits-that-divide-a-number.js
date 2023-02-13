/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;

    for (var i = 0; i < String(num).split("").length; i++) {
        if (num % String(num).split("")[i] === 0) {
            count++;
        }
    }
    return count;
};