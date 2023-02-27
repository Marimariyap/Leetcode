/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let copy = [...score];
    copy.sort((a, b) => b - a);

    for (var i = 0; i < copy.length; i++) {
        if (copy[0] === score[i]) {
            score[i] = "Gold Medal";
        } else if (copy[1] === score[i]) {
            score[i] = "Silver Medal";
        } else if (copy[2] === score[i]) {
            score[i] = "Bronze Medal";
        } else {
            score[i] = ""+(copy.indexOf(score[i]) + 1)+"";
        }
    }
    return score;

};