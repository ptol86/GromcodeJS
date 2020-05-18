/*
input: array of numbers;
output: array of numbers; 
*/

export function getEvenNumbers(arr) {
    
    return arr.filter(el => (el % 2 === 0));
}


