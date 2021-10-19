const fetch = require('node-fetch');

// versão mais completa temos uso da particula async antes da função 
const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
// usamos o tratamento de erro que é a estrutura try catch 
  try {
    // aqui temos uma 
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.