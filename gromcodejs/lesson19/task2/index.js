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


export function getOwnProps(obj) {
  return Object.keys(obj).filter((key) => typeof obj[key] !== "function");
};

