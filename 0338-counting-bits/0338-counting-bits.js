/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = [];
    for (var i = 0; i <= n; i++) {
        let count=i.toString(2).split('').filter((i)=>i==="1").length;
        arr.push(count);
    }
    return arr;
};