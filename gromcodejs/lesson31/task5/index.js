export const delay = num => new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, num);
  })

delay(3000)
.then(result => {
      console.log(result); // { name: 'John', age: 20 }
  });

