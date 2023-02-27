/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let st = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    let nd = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    let rd = ["z", "x", "c", "v", "b", "n", "m"];
    let answer = [];

    words.forEach((w) => {
    let i = w.toLowerCase().split("");

        if (
            i.every((j) => st.includes(j)) ||
            i.every((j) => nd.includes(j)) ||
            i.every((j) => rd.includes(j))
        ) {
            answer.push(w);
        }
    });
    return answer;

};