function squareArray(arr) {
        if (!Array.isArray(arr)) {
        return null;
        }

        return arr.map(elementh => elementh**2);
}




// (['a', 'b', 'c', 'd'])  ['b', 'd']