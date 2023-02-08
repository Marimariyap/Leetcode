/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(" ").filter((e) => e !== "");
    return s[s.length - 1].length;
};