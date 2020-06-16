// asyncSum(asynkNum1, asyncNum2, ...)

const getValueWithDelay = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    resolve(value);
  }, delay);
})

const asynkNum1 = getValueWithDelay(56, 1000);
const asynkNum2 = getValueWithDelay(4, 2000);
const asynkNum3 = getValueWithDelay(10, 3000);

const getSum = numbers => 
  numbers
  .filter(value => !isNaN(value))
  .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers));
};

asyncSum(asynkNum1, asynkNum2, asynkNum3)
  .then(result => console.log(result));