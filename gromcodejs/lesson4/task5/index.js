const m = 2;
const n = 45;
let result = 0;
for (let i = m; i <= n; i++)
    if (i % 5 === 0) {
        console.log(i);
        break;
    } else {
        if (i % 2 === 0 && i % 4 !== 0) {
            result += i;
        }
        if (i % 3 === 0) {
            result -= i;
        }
        if (i % 4 === 0) {
            result *= i;
        }
    }