const fetch = require('node-fetch');
// veja a utilização do async antes da declaração arrow 
// function 
const fetchJoke = async () => {
//  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  // url com defeito usaremos para força o uso da estrutrua catch 
  const url = 'api.chucknorris.io/jokes/random?category=dev';

// e o uso da particula await antes da chamada da função fetch
  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
  
  return result;
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.