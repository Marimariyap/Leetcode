/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0;
    let sell = 1;
    let max = 0;

    while (buy < prices.length) {
        if (prices[buy] < prices[sell]) {
            let diff = prices[sell] - prices[buy];
            max = Math.max(max, diff);
        } else {
            buy = sell;
        }
        sell++;
    }
    return max;
};