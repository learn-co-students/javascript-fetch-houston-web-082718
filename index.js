// const token = 'my secret token'
fetch('https://api.github.com/users/sparkbold-git/repos'
// , {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }
).then(res => res.json()).then(json => console.log(json));

