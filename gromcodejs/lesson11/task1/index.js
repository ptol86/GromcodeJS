/*input = number, amount;
output = array of rounded values of number*/

let splitText = (str, num) => {
    
    if (num === undefined) {
        num = 10;
        console.log(num);
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

let a = "abcd efghdsfsdfs fsdf sdf sdf s";
let b = 3;

// => 'Abcd\n efg\nH...']
