export const shmoment = initValue => {
    let resultDate = new Date(initValue);
    console.log(resultDate);
    
    const dictGetters = {
      "minutes": resultDate.getMinutes(),
      "hours": resultDate.getHours(),
      "seconds": resultDate.getSeconds(),
      "milliseconds": resultDate.getMilliseconds(),
      "years": resultDate.getFullYear(),
      "months": resultDate.getMonth(),
      "days": resultDate.getDate(),
    }
    const dictSetters = {
      "minutes":  setMinutes = (arg) => {
    return resultDate.setMinutes(arg);
    },
      "hours":  setHours = (arg) => {
    return resultDate.setHours(arg);
    },
      "seconds":  setSeconds = (arg) => {
    return resultDate.setSeconds(arg);
    },
      "milliseconds":  setMilliseconds = (arg) => {
    return resultDate.setMilliseconds(arg);
    },
      "years":  setFullYear = (arg) => {
    return resultDate.setFullYear(arg);
    },
      "months":  setMonth = (arg) => {
    return resultDate.setMonth(arg);
    },
      "days":  setDate = (arg) => {
    return resultDate.setDate(arg);
    },
    }
   
    const dateCalculator = {
      add(typeOfData, value) {
        dictSetters[typeOfData](dictGetters[typeOfData]+value);
        
        return this;
      },
      subtract(typeOfData, value) {
        dictSetters[typeOfData](dictGetters[typeOfData]-value);
        
        return this;
      },
    
      result() {
        return resultDate;
      },
    };
    // console.log(resultDate.getMinutes());
    return dateCalculator;
  }