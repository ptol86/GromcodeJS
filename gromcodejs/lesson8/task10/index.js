const buildObject = (keyList, valueList) => {
  let result = valueList.reduce(function(result, item, index) {
      result[keyList[index]] = item;
         return result;
  }, {});
  return result;
  
  
  
  }
  
  