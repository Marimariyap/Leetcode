/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
        if (word.includes(ch)) {
            word = word.split("");

            let arr = word.slice(0, word.indexOf(ch) + 1).reverse();
            let arr_2 = word.slice(word.indexOf(ch) + 1, word.length);
            return arr.concat(arr_2).join("");
        } else {
            return word;
        }
};
