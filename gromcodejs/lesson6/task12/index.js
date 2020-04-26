function sortAsc(arr) {
    return sortArray(arr, "sortAsc");
}

function sortDesc(arr) {
    return sortArray(arr, "sortDesc");
}





function sortArray(arr, sortMethod) {
    if (!Array.isArray(arr))
        return null;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i; j++) {
            if (sortMethod === "sortAsc") {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }

            } else {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }

            }

        }

    }

    return arr;
}


// ([1,2,22,1,63,54,1113,4,6,1,32,7,9,32,56,21,-100])