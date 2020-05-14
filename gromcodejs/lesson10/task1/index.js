const getFiniteNumbers = (arr) => {
    
    return arr.filter(el => Number.isFinite(el));
}

const getFiniteNumbersV2 = (arr) => {
    let result = [];
    arr.map(el => {
        isFinite(el) ? result.push(el): undefined;
        
    });
    return result;
}

const getNan = (arr) => {
    let result = [];
    arr.forEach(el => {
        Number.isNaN(el) ? result.push(el): undefined;
        
    });
    return result;
}
const getNanV2 = (arr) => {
    let result = [];
    arr.forEach(el => {
       isNaN(el) ? result.push(el): undefined;
        
    });
    return result;
}
const getIntegers = (arr) => {
    let result = [];
    arr.forEach(el => {
       Number.isInteger(el) ? result.push(el): undefined;
        
    });
    return result;
}




let a = [1124, 23, 0.123, "23", "nan", Infinity, NaN]