const isArrayFactorChain = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        // check if the next value is a multiple of current
        if (arr[i + 1] % arr[i] !== 0) {
            return false;
        }
    }
    return true;
}
  

module.exports = isArrayFactorChain;