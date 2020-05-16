/*input = string, occurrence;
output = count of occurrences;
   algo:
   1. find out if  string is empty;
   2. find out count of occurrences is in string;
   3. return count of occurrences in the string;
   */

// let countOccurrences = (str, occurrence) => {
//     let result = [];
//     count = 0;

//     if (occurrence === '') {
//         return null;
//     } 
//     result = str.split(occurrence);
//     console.log(result);
//     count = result.length;
//         return count;
//     }
    

    let countOccurrences = (str, occurrence) => {
        
        if (occurrence === '') {
            return null;
        } 
        let result = str.split(occurrence).length - 1;
        return result;
        }
        
      
let a = "Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem";