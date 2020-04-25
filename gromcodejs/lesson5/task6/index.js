function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;

    }
    return true;
}

function getPrimes(number) {
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}