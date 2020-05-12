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
  
  
  
  
  
  


  let obj = { 
   a: 1,
   b: 21, 
   c: 33, 
  };

   let arr = ['a', 'c'];