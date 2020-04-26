function swap(arr) {
    let someArr = [...arr];
    let i = someArr.shift();
    someArr.push(i);
    return someArr;
}