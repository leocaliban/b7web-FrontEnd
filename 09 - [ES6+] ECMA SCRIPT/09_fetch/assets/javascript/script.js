const URL = 'https://alunos.b7web.com.br/api/ping';
const PARAMS = {
    method: 'POST',
    body: JSON.stringify({
        nome: 'Jack',
        sobrenome: 'Bauer'
    })
};

fetch(URL, PARAMS)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });