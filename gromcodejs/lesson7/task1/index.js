function getSpecialNumbers(arr) {
    let result = arr.filter(item => item % 3 === 0)
        
    return result;
}

// ([6,8,7,1,8,2,6,7]) 