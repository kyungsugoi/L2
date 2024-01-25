const countNumberOfArrays = (arr) => {
    let arrCount = 0;
    for (let i = 0; i < arr.length; i++) {
        // check if array using isArray then increment array counter
        if (Array.isArray(arr[i])) {
            arrCount++;
        }
    }
    return arrCount;
}

module.exports = countNumberOfArrays;