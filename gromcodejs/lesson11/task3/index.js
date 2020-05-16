/*input = string, amount;
output = string of substrings;
   algo:
   1. find out if type of string is string;
   2. find out if length of substring is undefined;
   3. make a loop that will slice string on substrings;
   4. save our substrings into array;
   5. if substring < len , rest of len need to be fill with ".";
   6. return arr of subsrings.
   */

let splitString = (str, len = 10) => {
    const result = [];
    let chunk = "";

    if (typeof str !== 'string') {
        return null;
    } 

    for (let i = 0; i < str.length; i++) {
        chunk += str[i];
        if (chunk.length === len) {
            result.push(chunk);
            chunk = "";

        } 
        }
    if (chunk !== "") {
        result.push(chunk + ".".repeat(len - chunk.length));

    }
          
    return result;
            
}

    
let a ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa odit aspernatur natus sapiente? Velit ipsum omnis consectetur necessitatibus non ex voluptatibus animi suscipit doloribus ab, maxime temporibus incidunt aspernatur dicta.";
