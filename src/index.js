
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length == "") return [];
    return matrix.map((item, index) => {
        return (index%2 == 1) ? item.reverse() : item;
}).reduce((a, b) => a.concat(b));
}
