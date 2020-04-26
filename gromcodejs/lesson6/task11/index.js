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

    return (Math.min.apply(Math, arr) + Math.max.apply(Math, arr)) > 1000;
}



// ([1,2,22,1,63,54,1113,4,6,1,32,7,9,32,56,21,-100])