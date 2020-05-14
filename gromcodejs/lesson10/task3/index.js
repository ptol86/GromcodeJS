const multiRound = num => {
    let result = [];
    result.push(Math.floor(num * 100) / 100);
    result.push(Math.round(num * 100) / 100);
    result.push(Math.ceil(num * 100) / 100);
    result.push(Math.trunc(num * 100) / 100);
    result.push(Number.parseInt((num * 100) / 100).toFixed());
    return result;
}

let a = -2.123;