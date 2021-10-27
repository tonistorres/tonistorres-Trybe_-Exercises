
const fetch = require('node-fetch');
// função 
const getSuperHero = () => {
    const result = fetch("https://www.superheroapi.com/api.php/4192484924171229/720")
      .then((response) => response.json())
      .then((hero) => hero.name)
      .catch((error) => `Erro capturado--> ${error}`);
    return result;
  };

  // modificada a função colocando um T no final da URL para que ela retorne um erro 
  // de forma proposital
  const getSuperHeroError = () => {
    const result = fetch('https://www.urlalterada.com') // linha alterada
    .then((response) => response.json())
    .then((hero) => hero.name)
    .catch(() => 'erro');
  return result;
  };

  module.exports = {getSuperHero, getSuperHeroError};