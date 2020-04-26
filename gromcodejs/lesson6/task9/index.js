function reverseArray(arr) {
    let result = [];
    if (!Array.isArray(arr))
        return null;

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}