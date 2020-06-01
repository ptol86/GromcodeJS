const customers = {
  'customerId1': {
      name: 'William',
      age: 54
  },
  'customerId2': {
      name: 'Tom',
      age: 17
  },
};
//inputt: obj;
//output: arr of obj;
//algo
// 1. convert the obj to an arrays ++
// 2. map entries to the array of obj
// 3. sort the array and return

const getCustomersList = (obj) => {

  return Object.entries(obj)
  .map(([id, object]) => ({...object, id}))
  .sort((a, b) => a.age - b.age); 
}
console.log(getCustomersList(customers));

 // .map((entry) => {
        //     let id = entry[0];
        //     let obj = entry[1];
        //     let res = {...obj, id };
        //     return res;
        // })
        // .map(arr => {
        //     return {
        //         ...arr[1],
        //         id: arr[0],
        //     }
        // })
  




