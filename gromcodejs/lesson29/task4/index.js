export const requestUserData = (userId, callback) => {
  
    setTimeout(() => { 
      if (userId === "broken") {
          callback(null, `Failed to load user data`);
      }
  
      callback({userId,
            email: `${userId}@example.com`});
  
    }, Math.ceil(Math.random()*3000));
  }