/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
        if (0 > grid[i][j]) {
        count++;
        }
    }
    }
    return count;
};