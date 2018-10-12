const app = "I don't do much.";
const token = 'da71a4e9fb3637f81f9448c606a2a45889348540';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));