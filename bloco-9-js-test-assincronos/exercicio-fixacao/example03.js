
// aqui temos uma arrow functions recebendo como parametro um array e um numero 
// e retornando uma operação em que o numero passado dentro do método push retorna
// será adicionado no array que faz acesso ao método push 
const pushNumber = (array, number) => array.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);
setTimeout(() => console.log(numbers.sort((a,b)=>a-b)), 4000);