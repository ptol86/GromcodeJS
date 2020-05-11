const mergeObjectsV1 = (obj1, obj2) => {
  let newObj = {};
  Object.assign(newObj, obj1, obj2);
  return newObj;
}
const mergeObjectsV2 = (obj1, obj2) => {
  let newObj = {};
  Object.assign(newObj, obj2, obj1);
  return newObj;
}
const mergeObjectsV3 = (obj1, obj2) => {
  let newObj = {...obj1, ...obj2};
  
  return newObj;
}

const mergeObjectsV4 = (obj1, obj2) => {
  let newObj = {...obj2, ...obj1};
  
  return newObj;
}