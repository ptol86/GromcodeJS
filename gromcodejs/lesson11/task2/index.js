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
    let finish = num;
    do {
        value = str.substring(start, finish);
        const valueCapitalized = value.charAt(0).toUpperCase() + value.slice(1) + "\n";
        console.log(valueCapitalized);
        result.push(valueCapitalized);
        start += num;
        finish += num;}
         
    while (value !== "");
    
    
    return result.join("");
}

let a = "abcd efgh";
let b = 3;

// => 'Abcd\n efg\nH...']
