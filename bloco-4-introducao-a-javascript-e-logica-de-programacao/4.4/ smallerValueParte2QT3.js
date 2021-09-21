/**
3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
*/


let arrayNumber = [2, 4, 6, 7, 10, 0, -3];

function maxValue(nameArray) {

    let countNumberMax = 0;

    for (const key in nameArray) {

        if (nameArray[key] < countNumberMax) {
            countNumberMax = key;
        }
    }

    return countNumberMax;

}

console.log(maxValue(arrayNumber));
