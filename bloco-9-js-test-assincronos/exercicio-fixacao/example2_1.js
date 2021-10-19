
// aqui temos a mesma arrow function que recebe como parametro 
// um array e um numero e retornar uma operação em que o array
// passado invoca o método push e adiciona o numero passado por 
// paramentro a esse array vazio 
const pushNumber = (arrayList, number) => arrayList.push(number);
// array vazio 
let numbers = [];
// aqui temos uma fução nativa do javaScript que é a função 
// setTimeout que irá adicionar ao array nuberes por meio do 
// metédo já explicado lá em cima o numero 1 após 3000 milissegundos 
// de espera 


setTimeout(() =>{
    pushNumber(numbers, 1)
    console.log(`Após 3s imprime o number ${numbers[2]}`);
    console.log('Array Completo: ['+numbers.sort((a,b)=>a-b)+']');
} , 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]