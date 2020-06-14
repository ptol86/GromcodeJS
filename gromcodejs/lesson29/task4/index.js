export const requestUserData = (userId, callback) => {
  
  setTimeout(() => { 
    if (userId === "broken") {
        callback(`Failed to load user data`);
        return;
    }

    const a = (callback, userId) => {
      return callback(userId);
      // console.log(userId);
      // console.log(callback);
    }
    a();
    console.log(a);

  }, Math.ceil(Math.random()*3000));
}

const callback1 = (arg) => {
    return {userId: arg,
      email: `${arg}@example.com`}
};

// console.log(callback1("vasilyi"));
// requestUserData("Bob", callback1);
console.log(requestUserData("Bob", callback1));