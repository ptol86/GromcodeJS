const multiRound = num => [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Number.parseInt(((num * 100) / 100).toFixed())
   
];

let a = -2.123;