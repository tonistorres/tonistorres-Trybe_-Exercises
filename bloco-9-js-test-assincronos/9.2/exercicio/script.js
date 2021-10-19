// Agora vamos tentar fazer as requisições a API usando fetch .
// Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Um objeto contendo as especificações da requisição. 
// Para essa API , atribuiremos a esse objeto as chaves method e headers

// apiScript.js     
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject) // nesse ponto recebemos como resposta uma promisse 
    .then(response => response.json()) // nesse ponto iremos usar o método json na resposta da api que irá 
                                       // converter o conteúdo body da resposta e retornar uma outra promisse
                                       // que, quando, bem sucedida retorna um joson contendo as informações 
                                       // da piada. 
    .then(data => console.log(data));  // nesse ponto o retono já é os dados em formato json 
};

window.onload = () => fetchJoke();

// O segundo parâmetro myObject define o tipo de request: method:
// 'GET' e o formato da resposta headers: { 'Accept': 'application/json' } , 
// como visto nas requisições via curl .

window.onload = () => fetchJoke();