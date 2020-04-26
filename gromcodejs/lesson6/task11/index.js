function checker(arr) {
    if (!Array.isArray(arr))
        return null;
    let min = max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];

        }

    }
    return (min + max) > 1000;
}



// [5,2,22,1,63,54,23]