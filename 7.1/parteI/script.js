/* 
Faça as modificações necessárias na função para que o seu 
comportamento respeite o escopo no qual cada variável foi declarada.

1- Modifique a estrutura da função para que ela seja uma arrow function 
2- Modifique as concatenações para template literals .

Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>);
retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".


*/
// const funcao = (escopo) => {

//     if (escopo === true) {
//         let ifScope = "";
//         ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//         return console.log(ifScope);
//     } else {
//         elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//         return console.log(elseScope);
//     }
//     //   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// funcao(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function myFunction1() {

    return `Resultado ${oddsAndEvens.sort((a, b) => a - b)}`;
}
console.log(myFunction1());