function compareSums(a, b, c, d) {

    return sum(a, b) > sum(c, d);
}

function sum(from, to) {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
}