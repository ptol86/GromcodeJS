function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result = arr.reduce((a, c) => a + c);
    if (result > 100) {
        return true;
    } else return false;
}