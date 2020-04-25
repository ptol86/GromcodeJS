function getPrimes(number) {
    for (let minNumber = 1; minNumber <= number; minNumber++) {
        if (isPrime(minNumber)) {
            console.log(minNumber);
        }

    }
}



function isPrime(num) {
    if (num > 2 && num % 2 == 0)
        return false;
    return num > 1;
}