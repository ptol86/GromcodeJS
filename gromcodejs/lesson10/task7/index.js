/*input = number, amount;
output = array of rounded values of number*/

let superRound = (num, len) => {
    let precision_number = Math.pow(10, len);
    return [
    (Math.floor(num * precision_number) / precision_number),
    (Math.round(num * precision_number) / precision_number),
    (Math.ceil(num * precision_number) / precision_number),
    (Math.trunc(num * precision_number) / precision_number),
    (+num.toFixed(len))
    ]
    
}


let a = -4.341231231;
let b = 2;

