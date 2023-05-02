const email = 'seu_nome_de_usuario';
const password = 'sua_senha';
const url = '';

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + btoa(email + ':' + password)
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));