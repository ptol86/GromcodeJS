/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */
// ... code here
/*
    1 input: -
    2 output: number
*/
function getSenseOfLife() {
    return 42;
}

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */
// ... code here
/*
    1 input: number
    2 output: number
*/
function getSquared(num) {
    return num * num;
}

/* ф-ция sum должна принимать два числа и вернуть их сумму */
// ... code here
/*
    1 input: number, number
    2 output: number
*/
function sum(a, b) { 
    return a + b;
}

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

// ... code here

/*
    1 input: number
    2 output: undefined
*/
function printAge (num) {
    console.log('I am ' + num + ' years old');
}

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */
// ... code here
/*
    1 input: number, number
    2 output: number
*/
let mult = (a, b) =>  a * b;


/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */
// ... code here

/*
    1 input: number
    2 output: number
*/
let square = num => num * num; 

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */
// ... code here
/*
    1 input: -
    2 output: number
*/
let getMagicNumber = () => 17;

// function process (a, b) {
//     let result = "";
//     for (el of a.split("")) {
//         let isCommon = false;
//         for (el2 of b.split("")) {
//             if (el === el2) {
//                 isCommon = true;
                               
//             } 
//         }
//         if (!isCommon) {
//             result += el;
//         }
        
//     }
//     return result;
// }
// function solve(a,b){
//     let result1 = process(a, b);
//     let result2 = process(b, a);
       
//     return result1 + result2;
//    };

function solve(n) {
   let amountNotes = 0;
   let nominals = [500, 200, 100, 50, 20, 10];
   for (let i = 0; i < nominals.length; i++) {
       
       if (n >= nominals[i]) {
           let quantity = Math.floor(n / nominals[i]);
           console.log(quantity);
           amountNotes += quantity; 
           n = (n % nominals[i]);
        
        }
    }
    
    if (n > 0) {
        amountNotes = -1;
        }
    return amountNotes;
}