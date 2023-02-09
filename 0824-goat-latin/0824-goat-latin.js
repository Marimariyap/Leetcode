/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    return sentence
            .split(" ")
            .map((item, index) => {
                return (
                    (vowelSet.has(item[0]) ? item + "ma" : item.substring(1) + item[0] + "ma") + "a".repeat(index + 1)
                );
            })
            .join(" ");
};