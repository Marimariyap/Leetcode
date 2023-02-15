/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbol = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let sum = 0;
    for (var i = 0; i < s.length; i++) {
        if (symbol[s[i]] < symbol[s[i + 1]]) {
            sum += symbol[s[i + 1]] - symbol[s[i]];
            i++;
        } else {
            sum += symbol[s[i]];
        }
    }
    return sum;
};