/**4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; . */


let arrayNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorPalavra(arrayWords) {

    let biggestWord = arrayNames[0];

    for (const key in arrayNames) {

        if (biggestWord.length < arrayNames[key].length) {

            biggestWord = arrayNames[key];

        }

    }
    return biggestWord;

}

console.log(maiorPalavra(arrayNames));
