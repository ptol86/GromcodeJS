const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1';


export async function getUserData(userId) {
    const response = await fetch(`${baseUrl}/users/${userId}`)
    if (!response.ok) {
        throw new Error('Can not find a user');
    }

    return response.json();
    
};


export async function printUserData(userId) {
    try { 
    const user = await getUserData(userId)
    
    } catch (er) {
        console.log(er);
    }
        // .then(userData => {
        //     console.log(userData);
        // })
        // .catch(error => {
        //     console.log(error.message);
        // });
}