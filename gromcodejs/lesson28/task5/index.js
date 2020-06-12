const getMethodsNames = {
    years: 'getFullYear',
    months: 'getMonth',
    days: 'getDate',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds',
}
const setMethodsNames = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',
}
// console.log(setMethodsNames["milliseconds"])
export const shmoment = (date) => {
    let result = new Date(date);
    const calculator = {
        add(units, value) {
            const currentUnitValue = result[getMethodsNames[units]]();
            result = new Date(result[setMethodsNames[units]](currentUnitValue + value));
            return this;
        },
        subtract(units, value) {
            return this.add(units, -value);
        },
        result() {
            return result;
        }
    };
    return calculator;
}
//   let a = shmoment(new Date(2020, 0, 7, 17, 17, 17)).add("minutes", 22).result();
//   console.log(a);
  // shmoment(new Date(2020, 6, 8, 1, 18, 17)).add('minutes', 6).add('days', 8).subtract('years', 1).result(); // ... Jan 15 2019 17:19:17 ...
// .add("hours", 2).add("seconds", 2).add("milliseconds", 2000).subtract("years", 3).subtract("months", 3).subtract("days", 3)
