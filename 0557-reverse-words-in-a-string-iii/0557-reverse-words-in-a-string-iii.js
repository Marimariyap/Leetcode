/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let arr = s.split(" ");
    return arr.map((i) => i.split("").reverse().join("")).join(" ");
};