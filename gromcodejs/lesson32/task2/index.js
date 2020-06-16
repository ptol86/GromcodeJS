

const getRandomNumber = (from, to) =>
  from + Math.random() * (to - from);

const request = url => new Promise(resolve => {
  const randomDelay = getRandomNumber(1000, 3000);
  setTimeout(() => {
    resolve({
      userData: {
        name: "Tom",
        age: 17
      },
    });
  }, randomDelay);
});


const servers = [
  "https://server.com/us/users/userid",
  "https://server.com/eu",
  "https://server.com/au",
];

export const getUserASAP = (userId) => {
  const userUrls = servers
    .map(serverUrl => `${serverUrl}/users/${userId}`);
  const requests = userUrls
    .map(userUrl => request(userUrl));

  return Promise.race(requests);
}

console.log(getUserASAP(servers))