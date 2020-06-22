const baseUrl = "https://5ef08e01ad6d71001617a596.mockapi.io/api/v1/users";

export const getUsersList = () => {
  return fetch(baseUrl)
  .then(response => response.json())
  // .then(response => console.log(response))
 
}
// getUsersList();

export const getUserById = userId => {
  return fetch(`${baseUrl}/${userId}`)
  .then(response => response.json())
  // .then(response => console.log(response));
}
// getUserById(1)


// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 55,
//     email: "Alex@gmail.com",
// };

export const createUser = obj => {
  return fetch(baseUrl, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),

  })
    // .then(response => console.log(response))
};

export const updateUser = (userID, obj) => {
  return fetch(`${baseUrl}/${userID}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),

  })
    // .then(response => console.log(response))
};

// createUser(user);

export const deleteUser = userId => {
  return fetch(`${baseUrl}/${userId}`, {
      method: "DELETE",
  })    
}
// deleteUser(5)
// updateUser(1, user);
// getUsersList();