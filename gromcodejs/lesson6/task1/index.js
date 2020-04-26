let arr = [1, 5, 1];

function getArrayBounds(someArray) {
    if (!Array.isArray(someArray)) {
        return null;
    }
    return [someArray.length, someArray[0], someArray[someArray.length - 1]]
}