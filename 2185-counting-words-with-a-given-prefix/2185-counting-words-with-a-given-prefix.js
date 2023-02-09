/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    return words.filter((i) => i.substring(0,pref.length) === pref).length;
};