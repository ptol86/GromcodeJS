function getSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reduce((a, c) => a + c);
}