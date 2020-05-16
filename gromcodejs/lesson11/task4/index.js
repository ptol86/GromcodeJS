/*input = string, occurrence;
output = count of occurrences;
   algo:
   1. find out if  string is empty;
   2. find out count of occurrences is in string;
   3. return count of occurrences in the string;
   */

let countOccurrences = (str, occurrence) => {
    let result =[];
    count = 0;

    if (occurrence === '') {
        return null;
    } 
    result = [...str.matchAll(occurrence)];
    console.log(result);
    count = result.length
        return count;
    }
    
let a = "Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem";