export const shmoment = initValue => {
    let result = new Date(initValue);
    console.log(result);
    
    const dictGetters = {
      "minutes": result.getMinutes(),
      "hours": result.getHours(),
      "seconds": result.getSeconds(),
      "milliseconds": result.getMilliseconds(),
      "years": result.getFullYear(),
      "months": result.getMonth(),
      "days": result.getDate(),
    }
    const dictSetters = {
      "minutes":  setMinutes = (arg) => {
    return result.setMinutes(arg);
    },
      "hours":  setHours = (arg) => {
    return result.setHours(arg);
    },
      "seconds":  setSeconds = (arg) => {
    return result.setSeconds(arg);
    },
      "milliseconds":  setMilliseconds = (arg) => {
    return result.setMilliseconds(arg);
    },
      "years":  setFullYear = (arg) => {
    return result.setFullYear(arg);
    },
      "months":  setMonth = (arg) => {
    return result.setMonth(arg);
    },
      "days":  setDate = (arg) => {
    return result.setDate(arg);
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
        return result;
      },
    };
    // console.log(result.getMinutes());
    return dateCalculator;
  }