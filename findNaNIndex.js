const findNaNIndex = (arr) => {
    const indexes = [];
    for (let i = 0; i < arr.length; i++) {
        // use isNaN function to check if value is NaN then add to list of indexes
        if (isNaN(arr[i])) {
            indexes.push(i);
        }
    }
    return indexes;
};

module.exports = findNaNIndex;