const app = "I don't do much.";

const token = "7842768a4c2a1d4e62c97ffd6439a32dd7b2ef9e";

fetch("https://api.github.com/user/repos", {
  headers: {
    Authorizatoin: `token${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
