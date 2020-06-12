//compose

// const add3 = value => value +3;
// const mult2 = value => value * 2;
// const div4 = value => value / 4;


export const compose = (...funcs) => value => {
    return funcs.reduce((acc, func) => func(acc), value)
}

// const doEverything = compose(
//     add3,
//     mult2,
//     div4,
// );

// console.log(doEverything(3));

// calc(3).add(2).mult(4).div(10).subtract(5).result(); -3

export const calc = initValue => {
    let result = initValue;
  
    const calculator = {
      add(value) {
        result += value;
        return calculator;
      },
      mult(value) {
        result *= value;
        return this;
      },
      subtract(value) {
        result -= value;
        return this;
      },
      div(value) {
        result /= value;
        return this;
      },
      result() {
        return result;
      },
    };
  
    return calculator;
  }
  
  // const result = calc(3).add(2).mult(4).div(10).subtract(5).result(); -3
  
  // console.log(result);