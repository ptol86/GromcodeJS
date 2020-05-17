/*input = expression;
output = result of exprassion;
   algo:
   1. make a  deconstruction of expression;
   2. create variable result;
   2. use swith case construction to make a calc;
   4. return template string of expression equal to result.
*/

const calc = expression => {
    const [a, operator, b] = expression.split(" ");
    let result;

    switch (operator) {
        case "+":
            result = Number(a) + Number(b);
            break;
            
        case "-":
            result = a - b;
            break;

        case "/":
            result = a / b;
            break;

        case "*":
            result = a * b;
            break;
    }

    return `${expression} = ${result}`;
}



