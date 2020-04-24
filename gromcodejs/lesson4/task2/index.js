const m = 2;
const n = 22;
let result = 1;
let i = m;
while (i <= n) {
    i % 2 === 0 ? false : result *= i;
    i++;
}
console.log("Result: ", +result)