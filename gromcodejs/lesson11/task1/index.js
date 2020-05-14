/*input = number, amount;
output = array of rounded values of number*/

let splitText = (str, num) => {
    if (num === 0) {
        num = 10;
    };
    // if (typeof str === 'string' || str instanceof String) {
    //     return null;
    // }
    let start = 0;
    let result = [];
    let value = " ";
    let finish = num;
    while (value !== "") {
        value = str.substring(start, finish);
        const valueCapitalized = value.charAt(0).toUpperCase() + value.slice(1) + "\n";

        result.push(valueCapitalized);
        start += num;
        finish += num;
    }
    return result.join("");
}

let a = "abcd efgh";
let b = 4;

// => 'Abcd\n efg\nH...']
