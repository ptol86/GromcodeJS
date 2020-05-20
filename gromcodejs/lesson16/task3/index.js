

export const createArrayOfFunctions = (num = 0) => {
    if (typeof num !== "number") return null;
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = function () {
            return i;
        }
    }
    // console.log(arr);
    return arr;
}
