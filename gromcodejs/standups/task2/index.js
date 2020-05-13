let m = 10;
let n = 40;

let result = 0;

for (let i = m; 1 <= n; i++) {
    
    if (i % 5 === 0) {
        result +=1;
        // console.log("4 if is called for number " + i);
        console.log(i);
        continue;
    }
    
    if (i % 2 === 0 && i % 4 !==0) {
        // console.log("1 if is called for number " + i);
        result +=1;
        continue;
    }
    if (i % 3 === 0) {
        // console.log("2 if is called for number " + i);
        result -=1;
        continue;
    }
    if (i % 4 === 0) {
        // console.log("3 if is called for number " + i);
        result *=1;
        continue;
    }

}
// console.log(result);