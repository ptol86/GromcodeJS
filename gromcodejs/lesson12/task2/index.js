/*input = string;
output = inverted string;
   algo:
   1. create variable result;
   2. make a  deconstruction of string with split method;
   3. use reverse method of arr to reverse our arr;
   4. use join method to make our arr a string;
   4. return reverse string.
*/

const reverseString = str => {
    let result;
    if (typeof str !== 'string') {
        return null;
    } 
    result = str.split('').reverse().join("");
    // console.log(result);


    return result;
}



