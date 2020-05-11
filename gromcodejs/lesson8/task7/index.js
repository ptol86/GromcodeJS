const addPropertyV1 = (obj, key, value) => {
  
  obj[key] = value;
  return obj;
}

const addPropertyV2 = (obj, key, value) => {
  
  Object.assign(obj,{[key]: value});
  return obj;
}

const addPropertyV3 = (obj, key, value) => {
  let newObj = {};
  Object.assign(newObj, obj, {[key]: value});
  return newObj;
}
const addPropertyV4 = (obj, key, value) => {
  
  let newObj = {...obj};
  newObj[key] = value;
  return newObj;
}