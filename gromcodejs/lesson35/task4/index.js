export const parseUser = jsonStr => {
    try {
        return JSON.parse(jsonStr);
    }  catch(err) {
      return null;
    }
};


const a = `{name": "Vasya", "age": 24}`;


console.log(parseUser(a));