export const requestUserData = (userId, callback) => {
  
  setTimeout(() => { 
    if (userId === "broken") {
        callback(`Failed to load user data`);
    }

    const a = () => {
       return callback(userId);
      // console.log(userId);
      // console.log(callback);
    }
    a();
    // console.log(a);

  }, Math.ceil(Math.random()*3000));
}

let callback1 = (userId) => {
    return {userId: userId,
      email: `${userId}@example.com`}
};

// console.log(callback1("vasilyi"));
  // requestUserData("Bob", callback1);
// console.log(requestUserData("Bob", callback1));