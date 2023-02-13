/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    operations.map((i) => {
        if(i.includes("+")){
            x += 1;
        } else {
            x -= 1;
        }
    });
    return x;
};