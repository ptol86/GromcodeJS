/*
input: array of numbers;
output: array of numbers; 
*/

// - good;

function squareArray(arr) {
    
    if (!Array.isArray(arr)) {
        return null;
        }
    
    let result = [];
   

    for (let el of arr) {
        // result[i] = arr[i] *arr[i];
        result.push(el * el);
    }
    return result;
}

 // - bad;

// function squareArray2(arr) {
    
//     if (!Array.isArray2(arr)) {
//         return null;
//         }
   
    
//     let result = [ ...arr ];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i] *arr[i];
//     }
//     return result;
// }
