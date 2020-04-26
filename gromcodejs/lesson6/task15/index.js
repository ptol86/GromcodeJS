function includes(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return true;
        }
    }
    return false;
}


function includes1(arr, number) {
    let set1 = new Set(arr);
    return set1.has(number);
}