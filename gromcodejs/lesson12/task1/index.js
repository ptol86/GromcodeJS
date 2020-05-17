/*input = expression;
output = result of exprassion;
   algo:
   1. make a  deconstruction of expression;
   2. create variable result;
   2. use swith case construction to make a calc;
   4. return template string of expression equal to result.
*/

const cleanTransactionsList = arr => {
   
    let result = arr.map(Number);
    console.log(result);
    let arrr = [];
    for (let value of result) {
        
        if (!Number.isNaN(value)) {
            arrr.push(`$${value.toFixed(2)}`);
        }

    }
    console.log(arrr);
    return arrr;
    
    }

    let a = ['  1.9 ', '16.4', 17, ' 1 dollar '];
    
    cleanTransactionsList(a);



