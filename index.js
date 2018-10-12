const app = "I don't do much.";

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
 
// xhr.onload = function() {
//   console.log(xhr.response);
// };
 
// xhr.onerror = function() {
//   console.log('Booo');
// };
 
// xhr.send();

fetch('https://api.github.com/repos/jquery/jquery/commits')
    .then(res => res.json()) //getting the response res from fetch and using the json method to turn it into JSON
    .then(json => console.log(json)); //Then it's passing the JSON to the next line


const token = '58b93230f1932593b64106a658623055ea3605e1'
fetch('https://api.github.com/user/repos', {
    headers: {
    Authorization: `token ${token}`
  }
})
    .then(res => res.json())
    .then(json => console.log(json))