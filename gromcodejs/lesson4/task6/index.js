const n = 1000;
let result = 0;
let count = 0;
for (; count <= n; count++) {
    if (count % 2 !== 0) {
        console.log("Found");
        result += count;
    }

}
if (result * 5 > 5000) {
    console.log("Bigger")
} else {
    console.log("Smaller or equal");
}