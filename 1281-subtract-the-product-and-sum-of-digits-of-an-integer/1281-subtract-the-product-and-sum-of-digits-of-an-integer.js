/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let mul = 1;
    let sum = 0;

    n = String(n).split("");
    for (var i = 0; i < n.length; i++) {
        mul *= +n[i];
        sum += +n[i];
    }
    return mul - sum;
};