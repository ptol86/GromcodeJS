//input: obj, obj
//output: true || false
//algo: 
/* 
1. make a loop that will compare keys and values of two obj;
2. return true if keys and values are the same else return false.
 */
const obj1 = {
   name: 'Tom'
   age: 17
};
const obj2 = {
   name: 'Bob'
   age: 17
};
const obj3 = {
   name: 'Bob'
   age: 17,
   student: false
};
const obj4 = {
   name: 'Tom'
   age: 17,
};
compareObjects(obj1, obj2); // false
compareObjects(obj2, obj3); // false
compareObjects(obj1, obj4); // true
