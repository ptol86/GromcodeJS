/*input = string, amount;
output = string of substrings;
   algo:
   1. find if length of substring is undefined;
   2. make a loop that will slice string on substrings;
   3. save our substrings into array;
   4. return string of subsrings.
   5. if substring < len , rest of subsring need to be fill with ".";
*/

let splitString = (str, len = 10) => {
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

        if (chunk.length = len) {
            result.push(chunk);
            startPosition += len;}

        if (chunk.length < len) {
            let rest = (len - chunk.length);
            // console.log(rest);
            result.push(chunk + (".".repeat(rest)));
        }
        
    }

    return result;
}

// let a = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, ex.";
// let b = 5;


