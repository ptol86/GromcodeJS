function getSum(minNumber, maxNumber) {
    let result = 0;
    for (; minNumber <= maxNumber; minNumber++) {
        if (minNumber % 2 === 0) {
            result += minNumber;
        }

    }
    return result;
}