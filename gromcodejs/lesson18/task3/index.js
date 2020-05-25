"use strict";

export function sumOfSquares(...numbers) {
    console.log(this)
      return numbers.reduce((acc, el) => 
           acc + el * el);
  };
  
//   console.log(sumOfSquares(1, 2, 3, 4, 5, 6));