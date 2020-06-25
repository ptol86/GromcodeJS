export const reposList = document.querySelector(".repo-list");

export const renderRepos = userReposList => {
    const reposListElems = userReposList
    .map(({ name }) => {
        const listElem = document.createElement("li");
        listElem.classList.add("repo-list__item");
        listElem.textContent = name;
        return listElem;
    });
    cleanReposList();
    reposList.append(...reposListElems);
};

export const cleanReposList = () => {
    reposList.innerHTML = "";
}

