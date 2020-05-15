/*input = string, amount;
output = string of substrings;
   algo:
   1. find if length of substring is undefined;
   2. make a loop that will slice string on substrings;
   3. save our substrings into array;
   4. return string of subsrings.
*/

let splitText = (str, len = 10) => {
    const result = [];
    let startPosition = 0;

    if (typeof str !== 'string') {
        return null;
    } 
        
    while (true) {
        let chunk = str.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        result.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition +=len;
    }
    return result.join('\n');
}

// let a = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, ex.";
// let b = 12;


