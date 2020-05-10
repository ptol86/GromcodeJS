function reverseArray(arr) {
        if (!Array.isArray(arr)) {
        return null;
        }
        let result = [...arr];
        return result.reverse();
}




// (['a', 'b', 'c', 'd'])  ['b', 'd']