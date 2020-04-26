function squareArray(arr) {
    let result = [];
    if (!Array.isArray(arr)) return null;
    arr.forEach(item => result.push(item ** 2));
    return result;

}