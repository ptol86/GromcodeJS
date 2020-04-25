function getPrimes(number) {
    for (let minNumber = 2; minNumber <= number; minNumber++) {
        if (minNumber % minNumber === 0 && minNumber % 1 === 0) {
            console.log(minNumber);
        }
    }
}