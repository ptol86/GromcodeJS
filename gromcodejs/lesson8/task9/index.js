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
    if (!keyAndValueEqual) {
      return false;
    } 
}
  return true; 
}