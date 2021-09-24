/***
 * Como você já sabe, objetos são um dos tipos de dados em JavaScript
 * que possuem uma estrutura de chave e valor. 
 * Dê uma olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto:
 * 
 */

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};

//listando os valores das chaves
for (const key in coolestTvShow) {
    console.log(coolestTvShow[key]);
}

console.log('---------------------')
    //listando as chaves do objeto
for (const key in coolestTvShow) {
    console.log(key);
}