const getTotalPrice = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    let sum = 0;
        
    arr.map(el => sum += el);
    
    return  ("$" + Math.floor(sum * 100) / 100);
}
    



let a = [-2.123, 2323, -123, -0.3434, 1233.5656];