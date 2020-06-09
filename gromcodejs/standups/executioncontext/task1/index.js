"use strict";
/*
1. learn requirements +++
2. create step by step algo (&input/output for functions)
3. create prototype solution
4. testing
5. refactoring
6. final solution
*/ 
// let secondsPassed = 10;

export const timer = {
   secondsPassed: 0,
   minsPassed: 0,
   
  //  startTimer() {

          // loose context
  //     const adder = function() {
  //       this.secondsPassed += 1;
  //        console.log(this.secondsPassed);
  //     };
        // fix context
  //   const newAdder = adder.bind(this);

  //   setInterval(newAdder, 1000);
  //  },

   startTimer() {
      let intervalId = setInterval(() => {
        this.secondsPassed += 1;
        //  console.log(this.secondsPassed);
        if (this.secondsPassed === 60) {
          this.minsPassed += 1;
          this.secondsPassed = 0;
        }
        // console.log(this.secondsPassed);
        // console.log(this.minsPassed);
    }, 1000);
   },
   
   stopTimer() {
     clearInterval(this.intervalId);
   },

   getTime() {
      return this.secondsPassed < 10 
        ? `${this.minsPassed}:0${this.secondsPassed}`
        : `${this.minsPassed}:${this.secondsPassed}`;
    },
   

   resetTimer() { 
      this.secondsPassed = 0;
      this.minsPassed = 0;
   },

}