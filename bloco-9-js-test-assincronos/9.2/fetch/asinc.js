const fetch = require('node-fetch');

const fetchJoke = async () => {
    // url correta 
    //const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    // url com defeito usaremos para força o uso da estrutrua catch 
    const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.