const timer = {
   secondPassed: 0,
   minsPassed: 0,

   startTimer () {
      
      setInterval(function () {
         this.secondPassed += 1;
      if (this.secondPassed === 60) {
         this.secondPassed = 0;
         this.minsPassed += 1;}
         }, 1000);
      },
   
   getTime () {
      if (this.secondPassed < 10) {
         return `${this.minsPassed}:0${this.secondPassed}`; 
      }
      return `${this.minsPassed}:${this.secondPassed}`;
      
   },

   stopTimer () {
      clearInterval(this.startTimer);
   }

   resetTimer() { 
      this.secondsPassed = 0;
      this.minsPassed = 0;
  },

}


