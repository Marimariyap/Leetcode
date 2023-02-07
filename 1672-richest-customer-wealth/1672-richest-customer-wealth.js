/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let answer = 0;
    for (var i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (var j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
    answer = Math.max(sum, answer);
    }
    return answer;
};