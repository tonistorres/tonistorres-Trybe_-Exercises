/**
 * Documentação:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  Object.keys() retorna um array cujo os  elementos são strings correspondentes para a propriedade enumerável encontrada diretamento sobre o objeto. A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades do objeto manualmente.
 * 
 * Mas e se dissermos que há uma maneira mais robusta de trabalhar com objetos e seus valores? O método Object.keys como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array. Cada entrada do array retornado será uma string com o valor de cada chave do objeto,
 * 
 */

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(property);
// }

//console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]


//Exemplos da Documentação 

// const arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr));

// const an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(an_obj));