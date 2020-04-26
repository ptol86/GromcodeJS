function removeDuplicates(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let add1 = true;
        result.forEach(element => {
            if (element === array[i]) {
                add1 = false;

            }
        });
        if (add1) {
            result.push(array[i]);
        }
    }
    return result;
}

// ([6,8,7,1,8,2,6,7])