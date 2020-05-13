
const getAdults = (obj) => Object.entries(obj)
.filter(user => user[1] >= 18)
.map(user => user[0]);
  

// let result = {};

// let users = {
// 'tom': 18,
// 'bob' : 19,
// 'jimmy' : 15,};

// console.log(getAdults(result));