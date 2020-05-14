/*input = function-count, min- number, max-number;
output = array of random numbers from min-number to max-number*/

function getRandomNumbers(count, min, max) {
    const intNum = Math.ceil(max) === Math.ceil(min); 
    if (intNum) {
        return null;
    }

    let result = []; 

    for (let i = 0; i < count; i++) { 
        result[i] = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
    };
    return result;
}


let a = 4.34;
let b = 2.3;
let c = 2.9;
