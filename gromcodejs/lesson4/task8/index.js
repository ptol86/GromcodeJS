const n = 1;
const m = 1000;
let result = 0;
for (let i = 1; i <= m; i++) {
    result += i;
}
console.log(Boolean(result / 1234 > result % 1234));