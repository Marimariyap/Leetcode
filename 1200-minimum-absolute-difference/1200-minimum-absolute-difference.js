/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let abs = Infinity;
    let answer = [];

    arr = arr.sort((a, b) => a - b);
    for (var i = 0; i < arr.length - 1; i++) {
        const min = arr[i + 1] - arr[i];
        if (min < abs) {
            abs = min;
            answer = [[arr[i], arr[i + 1]]];
        } else if (min === abs) {
            answer.push([arr[i], arr[i + 1]]);
        }
    }
    return answer;
};