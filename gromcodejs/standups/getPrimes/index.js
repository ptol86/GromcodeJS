/* 
    1. learn requirements & 
    2. create algo;
    3. create prototype;
    4. refactoring & testing;
    5. final solution;

       algo
    1. iterate from 1 to n
    2. write func that checks number is prime
    3. if number is prime - print it
     
    input: number
    output: boolean
    // algo
    1. iterate from 1 to num ++;
    2. if num % i  !== 0 false
    */
    
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