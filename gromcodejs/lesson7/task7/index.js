function increaseEvenEl(arr, delta) {
        if (!Array.isArray(arr)) {
        return null;
        }
        

        return arr.map(element => element % 2 === 0 ? element*delta : element);
}




// (['a', 'b', 'c', 'd'])  ['b', 'd']