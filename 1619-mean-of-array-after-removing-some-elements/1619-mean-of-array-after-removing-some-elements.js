/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    
    arr = arr.sort((a, b) => a - b);
    let five = arr.length * 0.05;
    let sum = 0;

    for (var i = five; i < arr.length - five; i++) {
        sum += arr[i];
    }
    return sum / (arr.length - five * 2);
};