"use strict";


// const ship = {
//   name: "Aurora",
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log(`Lifting anchor down`);
//   },
//   liftAnchorUp() {
//     console.log(`Lifting anchor up`);
//   },
// };


// function getOwnProps(obj) {
//   let result = [];
//   for(let prop in ship) {
//     if (ship.hasOwnProperty(prop)) {
//       result.push(prop);
//     }
//   };
// }

export function getOwnProps(obj) {
  return Object.keys(obj);

};

