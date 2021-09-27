//Documentação:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
/**
 * O método Object.entries () retorna uma matriz dos pares próprios [chave, valor] enumeráveis ​​de um dado objeto, na mesma ordem dos objetos providos através do loop for ... in (sendo a diferença que o for-in loop enumera também propriedades dispostas na cadeia de prototipagem - cadeia de protótipos).
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

// console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]

//var obj = { foo: 'bar', baz: 42 };
//console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// objeto array-like
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// objeto array-like com ordenação aleatória de chave (key)
// var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo é uma propriedade que não é enumerável
//var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
//my_obj.foo = 'bar';
//console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// argumento não-objeto será convertido (conversão implícita) para um objeto
//console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// itera graciosamente através de chave-valor (key-value)
//var obj = {a: 5, b: 7, c: 9};
//for (var [key, value] of Object.entries(obj)) {
//    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
//}

// Ou, usando array extras
//Object.entries(obj).forEach(([key, value]) => {
//console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
//});