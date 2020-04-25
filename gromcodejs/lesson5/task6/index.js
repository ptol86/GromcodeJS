function getPrimes(number) {
    for (let minNumber = 1; minNumber <= number; minNumber++) {
        if (minNumber % minNumber === 0 && minNumber % 1 === 0 && minNumber !== 1) {
            console.log(minNumber);
        }
    }
}