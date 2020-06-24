import { renderUserData } from './renderUserData.js';
import { showSpinner, hideSpinner } from './spinner.js';
import { fetchUserData, fetchReposUrlData } from './fetch.js';




const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");
const reposListElem = document.querySelector(".repo-list");

const onSearchUser = () => {
    showSpinner();
    reposListElem.innerHTML = "";
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(userData => {
            return renderUserData(userData);
                      
        })
        .then(url => {
            return fetchReposUrlData(url);

        })
        .then(reposUrl => {
            const repoListElems = reposUrl
                .map(({ name }) => {
                    const repoListElem = document.createElement("li");
                    repoListElem.classList.add("repo-list__item");
                    repoListElem.textContent = name;
                    return repoListElem;
            });
            reposListElem.append(...repoListElems)
        })
        .catch(err => {
            console.log(err.message);
            alert(err.message);
            
        })

    hideSpinner();
      
    

    
}

showUserBtnElem.addEventListener("click", onSearchUser);



