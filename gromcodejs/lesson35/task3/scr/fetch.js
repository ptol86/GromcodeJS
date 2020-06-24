export const fetchUserData = userName => {
    return fetch(`htps://api.github.com/users/${userName}`)
        .then(response => {
            if (response.ok) {
                return  response.json();
            }
            else {
                throw new Error("Failed to load data")
            };
        });
}

export const fetchReposUrlData = url => {
    return fetch(url)
        .then(response =>  {
            if (response.ok) {
                return  response.json();
            }
            else {
                throw new Error("Failed to load data")
            };
        });
}