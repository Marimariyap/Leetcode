/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    let arr = n;
    while (arr != 1) {
        let sum = 0;
        arr.toString().split("").forEach((i) => (sum += i * i));
        
        if (set.has(sum)) {
            return false;
        } else {
            set.add(sum);
            arr = sum;
        }
    }
    return true;
};