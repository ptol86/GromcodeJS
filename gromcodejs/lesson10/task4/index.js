const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    let result = arr.map(num => Math.abs(num));
    return Math.max.apply(null, result);
}

let a = [-2.123, 2323, -123, -0.3434, 1233.5656];