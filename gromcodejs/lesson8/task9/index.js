const compareObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  
  for (let key in obj1) {
    let result = false;
    let keyEq = false;
    for (let key2 in obj2) {

      if (key === key2) {
        keyEq = true;
        console.log(key === key2);
      }

      if (obj1[key] === obj2[key2]) {
        result = true;
      }
    }
    if (!result || !keyEq) {
      return false;
    }
  return true;  
}
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
  name: 'Tom',
  balumba: 17,
};
// compareObjects(obj1, obj2); // false
// compareObjects(obj2, obj3); // false
// compareObjects(obj1, obj4); // true
