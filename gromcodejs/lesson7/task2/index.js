function sortDesc(array) {
    let arr = array;
    function compare(a, b) {
        if (a < b) {
            return 1;
        }
        return -1;
    }
    arr.sort(compare);
    return arr;
}

// ([6,8,7,1,8,2,6,7]) 