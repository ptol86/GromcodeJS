const compareObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  
  for (let key in obj1) {
    let keyAndValueEqual = false;
    for (let key2 in obj2) {
      if (key === key2 && obj1[key] === obj2[key2]) {
        keyAndValueEqual = true;
      }
    }
    if (keyAndValueEqual == false) {
      console.log(keyAndValueEqual);
      return false;
    } 
  }
  return true; 
}
 
  


  

const obj1 = {
  name: 'Tom',
  age: 17,
};
const obj2 = {
  name: 'Bob',
  age: 17,
};
const obj3 = {
  name: 'Bob',
  age: 17,
  student: false
};
const obj4 = {
    age: 17,
    name: 'Tom',
};
// compareObjects(obj1, obj2); // false
// compareObjects(obj2, obj3); // false
// compareObjects(obj1, obj4); // true
