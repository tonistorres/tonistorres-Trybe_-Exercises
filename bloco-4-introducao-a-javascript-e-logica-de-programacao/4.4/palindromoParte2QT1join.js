

/*

Funcionamento da Função split() - Ela transforma uma String em uma cadeia de 
caracter, ou seja, o nome tonis será faccionado em um array de caracter de letra
por letra ['t','o','n','i','s'] 

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join#syntax
Array.prototype.join()
O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
Sintaxe
arr.join([separador = ','])

*/

let str = "tonis";

function quebraStringReagrupa(str) {

    return str.split("").join("");

}

console.log(quebraStringReagrupa(str));
