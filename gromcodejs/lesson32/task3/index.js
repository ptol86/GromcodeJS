export const makePromise = (value) => new Promise(resolve => {
  resolve(value);
})
makePromise(17)
.then(number => {
    console.log(number); // 17
});