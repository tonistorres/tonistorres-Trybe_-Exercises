// Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que o número recebido por parâmetro, falso caso contrário

// Ex: 
// array: [20, 30, 19, 1, 50]
// number: 20
// resultado esperado: false 

// Ex: 
// array: [20, 30, 19, 21]
// number: 18
// resultado esperado: true

const arrayNumeros = [1, 2, 3, 4, 5, 6] //se todos os valores desse array

function allGreaterThan(number, array) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < number) {
            return false;
        }
        return true;
    }
}

console.log(allGreaterThan(-3, arrayNumeros));