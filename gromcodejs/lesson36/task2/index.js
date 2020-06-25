export const getUsersBlogs = async usersId => {

    return Promise.all(usersId.map(user => 
        fetchUser(user)
        .then(userData => userData.blog)
        .catch(err => alert(err.message))
    ))
    
};

async function fetchUser (userName) {
    try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
        if (response.ok) {
            return  response.json();
        }    
    } catch (err) {
        throw new Error("Failed to fetch user");
    }
}

getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));
    