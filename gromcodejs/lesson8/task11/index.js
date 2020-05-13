const pickProps = (obj, arr) => {
  let result = {};

  for (let key in obj) {
    arr.forEach(el => {
      if (key === el) {
        result[key] = obj[key];
      }
    })
    }

    return result;
  }
  
  
  
  
  
  
