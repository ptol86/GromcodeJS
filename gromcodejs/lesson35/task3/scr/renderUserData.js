const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const defaultAvatar = "https://avatars3.githubusercontent.com/u10001";
const reposUrl = "";
userAvatarElem.src = defaultAvatar;

export const renderUserData = userData => {
    const { avatar_url, name, location, repos_url } = userData;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location
    ? `from ${location}`
    : "";
    return repos_url;
};
