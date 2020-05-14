const getParsedIntegers = (arr) => {
    
    return arr.map(el => Number.parseInt(el));
}

const getParsedIntegersV2 = (arr) => {
    
    return arr.map(el => parseInt(el));
}

const getParsedFloats = (arr) => {
    
    return arr.map(el => Number.parseFloat(el));
}
const getParsedFloatsV2 = (arr) => {
    
    return arr.map(el => parseFloat(el));
}


let a = [1124, 23, 0.123, 0.34, "1.76234blablabla", 12.23];