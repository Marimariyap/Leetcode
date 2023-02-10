/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
   return arr = s
            .split(" ")
            .sort((a, b) => a[a.length - 1] - b[b.length - 1])
            .map((i) => i.slice(0, i.length - 1))
            .join(" ");
};