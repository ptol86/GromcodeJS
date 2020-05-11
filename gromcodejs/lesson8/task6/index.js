const addPropertyV1 = (userData, userId) => {
  userData.userId = userId;
  return userData;
}
const addPropertyV2 = (userData, userId) => {
  
  Object.assign(userData,{userId: userId});
  return userData;
}
const addPropertyV3 = (userId) => {
  let newObj = {};
  Object.assign(newObj, {userId: userId});
  return newObj;
}