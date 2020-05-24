export const timer = {
   secondsPassed: 0,
   minsPassed: 0,
   intervalId: 0, 

   startTimer: function startTimer() {
      intervalId = setInterval(function() {
      this.secondsPassed++;
      if (this.secondsPassed === 60) {
          this.secondsPassed = 0;
          this.minsPassed++;
      }
      console.log(this.secondsPassed);
   }.bind(this), 1000);
   
  
},
   
   getTime() {
      if (this.secondsPassed < 10) {
         return `${this.minsPassed}:0${this.secondsPassed}`; 
      }
      return `${this.minsPassed}:${this.secondsPassed}`;
      
   },

   stopTimer() {
      clearInterval(this.intervalId);
   },

   resetTimer() { 
      this.secondsPassed = 0;
      this.minsPassed = 0;
   },

}


