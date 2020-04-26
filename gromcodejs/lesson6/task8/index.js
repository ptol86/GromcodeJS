function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr))
        return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] += delta;
        }
    }
    return arr;
}
// ([2, 5, 6, 8, 11, 9, 4], 20)