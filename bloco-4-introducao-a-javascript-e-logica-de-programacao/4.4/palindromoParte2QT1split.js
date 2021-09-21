

/*Funcionamento da Função split() - Ela transforma uma String em uma cadeia de 
caracter, ou seja, o nome tonis será faccionado em um array de caracter de letra
por letra ['t','o','n','i','s'] */

// let str="tonis";

// function quebraString(str) {

//     return str.split("");

// }

// console.log(quebraString(str));

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/splits

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log('A string original é: "' + stringToSplit + '"');
    console.log('O separador é: "' + separator + '"');
    console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
  }
  
  let stringToSplit='tonis';
  let separator='';

  splitString(stringToSplit,separator);
  