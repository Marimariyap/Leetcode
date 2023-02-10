/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let arr = [];
    
    s = s.split(" ");
    
    for (var i = 0; i < s.length; i++) {
        arr.push(s[i].split("").reverse().join(""));
    }
    return arr.join(" ")
};