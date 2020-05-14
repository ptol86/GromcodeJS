const getFiniteNumbers = (arr) => {
    
    return arr.filter(el => Number.isFinite(el));
}

const getFiniteNumbersV2 = (arr) => {
    
    return arr.filter(el => isFinite(el));
} 

const getNan = (arr) => {
    
    return arr.filter(el => Number.isNaN(el));
} 
const getNanV2 = (arr) => {
    return arr.filter(el => isNaN(el));
}
const getIntegers = (arr) => {
    return arr.filter(el => Number.isInteger(el));
    
}




let a = [1124, 23, 0.123, "23", "nan", Infinity, NaN]