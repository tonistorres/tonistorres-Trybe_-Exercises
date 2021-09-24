/******************************************************************
 * Contribuição do canal:TecNoz by Daniel Cukier
 * Fontes de Pesquisas: https://www.youtube.com/watch?v=H5u1dOoCPnc
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