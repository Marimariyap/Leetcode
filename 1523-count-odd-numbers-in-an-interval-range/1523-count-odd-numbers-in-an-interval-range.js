/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0;
    for (var i = low; i <= high; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }
    return count;
};