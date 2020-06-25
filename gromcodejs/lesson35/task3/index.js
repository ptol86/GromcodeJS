import { renderUserData } from './renderUserData.js';
import { showSpinner, hideSpinner } from './spinner.js';
import { fetchUserData, fetchReposUrlData } from './fetch.js';
import { reposList, renderRepos, cleanReposList } from './repos.js';

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const defaultUser = {
    avatar_url: "https://avatars3.githubusercontent.com/u10001",
    name: "",
    location: "",
}

renderUserData(defaultUser);

const onSearchUser = () => {
    cleanReposList();
    showSpinner();
    const userName = userNameInputElem.value;

    fetchUserData(userName)
        .then(userData => {
            return renderUserData(userData);
        })
        .then(url => {
            return fetchReposUrlData(url);
        })
        .then(reposList => {
            renderRepos(reposList);
        })
        .catch(err => {
            alert(err.message);
        })
        .finally(() => {
            hideSpinner();
        })

    
 
}

showUserBtnElem.addEventListener("click", onSearchUser);



