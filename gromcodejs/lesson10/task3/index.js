const multiRound = num => {
    let result = [];
    result.push(Math.floor(num));
    result.push(Math.round(num));
    result.push(Math.ceil(num));
    result.push(Math.trunc(num));
    result.push(Number.parseInt((num).toFixed()));
    return result;
}

let a = -2.123;