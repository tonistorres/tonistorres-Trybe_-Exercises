// aqui temos uma arrow functions recebendo como parametro um array e um numero 
// e retornando uma operação em que o numero passado dentro do método push retorna
// será adicionado no array que faz acesso ao método push 
const pushNumber = (arraylist, number) => arraylist.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);