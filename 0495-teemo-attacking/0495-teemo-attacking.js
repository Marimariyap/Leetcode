/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let total = duration
    
    for(let i = 0; i + 1 < timeSeries.length; i++){
        let diff = timeSeries[i + 1] - timeSeries[i]
        total += diff > duration ? duration : diff 
    }
    return total;
};