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
   
    let result = arr.map(Number);
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        
        if (!Number.isNaN([i])) {
            result.push([i].toFixed(2));
        }

    }

    return result;
}

let a = ['  1.9 ', '16.4', 17, ' 1 dollar '];
['$1.90', '$16.40', '$17.00']

