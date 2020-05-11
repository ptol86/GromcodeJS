const addPropertyV1 = (userData, userId) => {
  
  userData.id = userId;
  return userData;
}
const addPropertyV2 = (userData, userId) => {
  
  Object.assign(userData,{id: userId});
  return userData;
}
const addPropertyV3 = (userData, userId) => {
  let newObj = {};
  Object.assign(newObj, userData, {id: userId});
  return newObj;
}
const addPropertyV4 = (userData, userId) => {
  
  let newObj = {...userData};
  newObj.id = userId;
  return newObj;
}