/*input = number, amount;
output = array of rounded values of number*/

function superRound(num, len) {
    
    let result = [];
    
    let precision_number = Math.pow(10, len);

    result.push(Math.floor(num * precision_number) / precision_number),
    result.push(Math.round(num * precision_number) / precision_number),
    result.push(Math.ceil(num * precision_number) / precision_number),
    result.push(Math.trunc(num * precision_number) / precision_number),
    result.push(+num.toFixed(len));
   
    console.log(result);
}


let a = 4.341231231;
let b = 6;

