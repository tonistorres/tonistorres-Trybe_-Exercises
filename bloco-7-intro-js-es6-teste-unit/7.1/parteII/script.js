/******************************************************************
 * Contribuição do canal:TecNoz by Daniel Cukier
 * Fontes de Pesquisas: https://www.youtube.com/watch?v=H5u1dOoCPnc
 * https://pt.stackoverflow.com/questions/309073/como-mudar-todas-as-palavras-selecionadas-de-uma-s%C3%B3-vez-no-vscode
 * https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split
 ******************************************************************* 
 * Crie uma função que receba um número e retorne seu fatorial.
 *  Sobre o Fatorial Matematicamente Falando
 * Se o número é Zero Fatorial desse Numero é 1
 * Se o número é Um o Fatorial desse Número é 1
 * Para qualquer outro numero: Fatorial do número, é o numero vezes o fatorial dele menor 1
 * 
 */


// function fatorial(n) {

//     var resultado = 1;

//     for (let i = n; i > 1; i--) {
//         resultado = resultado * i;
//     }
//     return resultado;
// }


// function fatorialRecursiva(n) {

//     if (n === 0) return 1;
//     if (n === 1) return 1;

//     return n * fatorialRecursiva(n - 1);

// }
// console.log(`${fatorialRecursiva(8)}`);


function recebeFrase(frase) {

    let contador = 0;
    let recebeMaiorPalavra = "";
    const myArray = frase.split(" ");

    console.log("TODAS AS FRASES:" + myArray);

    for (let i = 0; i < myArray.length; i += 1) {
        console.log('Frase[' + i + ']=' + myArray[i])
        console.log('Tamanho:' + myArray[i].length)
        console.log('--------------------------');

        if (myArray[i].length > contador) {
            contador += myArray[i].length;
            recebeMaiorPalavra = myArray[i];
        }

    }

    return recebeMaiorPalavra;

}

console.log("Essa é a Frase Maior Retornada: " + recebeFrase('Tonis Alberto Torres Ferreira'))