function uniqueCount(array) {
    let result = [];
       for (let i = 0; i < array.length; i++) {
        let finded = false;
        for (let j = 0; j <= result.length; j++) {
            if (array[i] === result[j]) {
                finded = true;
            }
        }
        if (!finded) {
            result.push(array[i]);
        }
        

    }
        
    return result.length;
}

// ([6,8,7,1,8,2,6,7]) 