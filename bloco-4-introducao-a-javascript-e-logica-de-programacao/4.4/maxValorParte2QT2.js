/**2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 
 * Array de teste: [2, 3, 6, 7, 10, 1]; .
 * Observação: Essa é pegadinha rsrs índice e não elemento contido dentro do array 
 * 
*/


let arrayNumber = [2, 3, 6, 7, 10, 1];

function maxValue(nameArray) {

    let countNumberMax = 0;

    for (const key in nameArray) {

        if (nameArray[key] > countNumberMax) {
            countNumberMax = key;
        }
    }

    return countNumberMax;

}

console.log(maxValue(arrayNumber));
