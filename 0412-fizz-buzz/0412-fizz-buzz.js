/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = [];
    for (var i = 1; i <= n; i++) {
    arr.push(i);
    }
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
        arr[i] = "Fizz";
    } else if (arr[i] % 3 !== 0 && arr[i] % 5 === 0) {
        arr[i] = "Buzz";
    } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
        arr[i] = "FizzBuzz";
    } else {
        arr[i] += "";
    }
    }
    return arr;
};