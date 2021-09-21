/*Faça um programa que defina três constantes com os valores
 dos três ângulos internos de um triângulo.
 Retorne true se os ângulos representarem os
 ângulos de um triângulo e false ,caso contrário. 
 Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 
 */
const anguloInternoA = 100, anugloInternoB = 40, anguloInternoC = 40;
const mensagemErro1 = 'Error: Fora da Métrica de condição de existência';

if (anguloInternoA <= 0 || anugloInternoB <= 0 || anguloInternoC <= 0) {
    console.log(mensagemErro1);
} else if (anguloInternoA + anugloInternoB + anguloInternoC === 180) {
    console.log('True-VERDADEIRO - SIM ')
} else {
    console.log('False-FALSO - NÃO ')
}

