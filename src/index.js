exports.min = function min(array) {
    if (isValidArray(array)) {
        const ascendingArray = array.sort(function(a, b) {
            return a - b;
        });
        return ascendingArray[0];
    }
    return 0;
};

exports.max = function max(array) {
    if (isValidArray(array)) {
        const descendingArray = array.sort(function(a, b) {
            return b - a;
        });
        return descendingArray[0];
    }
    return 0;
};

exports.avg = function avg(array) {
    if (isValidArray(array)) {
        const average = array.reduce((sum, step) => sum + step);
        return average / array.length;
    }
    return 0;
};

function isValidArray(array) {
    if (Array.isArray(array) && array.length !== 0) {
        return true;
    }
    return false;
}
