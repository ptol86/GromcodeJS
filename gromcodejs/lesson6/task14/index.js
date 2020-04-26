function getSubArray(arr, number) {
    let result = [];
    if (arr.length < number) {
        return arr;
    }
    for (let i = 0; i < number; i++) {
        result.push(arr[i]);
    }
    return result;
}


// (["Ann", "john", "user", 1,1,1,1,2,3,4], 10)