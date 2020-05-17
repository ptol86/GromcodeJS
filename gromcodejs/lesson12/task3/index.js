/*input = string;
output = inverted string;
   algo:
   1. create variable result;
   2. make a  deconstruction of string with split method;
   3. use reverse method of arr to reverse our arr;
   4. use join method to make our arr a string;
   4. return reverse string.
*/

const cleanTransactionsList = arr => {
   
    let result = arr.slice().map(Number);
    // console.log(result);
    let arrr = [];
    for (let value of result) {
        
        if (!Number.isNaN(value)) {
            arrr.push(`$${value.toFixed(2)}`);
        }

    }
    // console.log(arrr);
    return arrr;
    
    }

    let a = ['  1.9 ', '16.4', 17, ' 1 dollar '];
    cleanTransactionsList;
