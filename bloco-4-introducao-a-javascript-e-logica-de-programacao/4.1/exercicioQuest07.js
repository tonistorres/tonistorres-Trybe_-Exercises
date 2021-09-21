/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100)
em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar 
se a nota passada for menor que 0 ou maior que 100.
 */

const notaDadaPorcentagem = 1;
const mensagemError = "Erro nota fora das especificaçẽos do requesito";
const mensagemEncerramento = "Encerrando o Sistema";
if (notaDadaPorcentagem < 0 || notaDadaPorcentagem > 100) {
    console.log(mensagemError);
    console.log(mensagemEncerramento);
} else if (notaDadaPorcentagem >= 90) {
    console.log('Parabéns sua Nota Conceitual é A');
}else if(notaDadaPorcentagem>=80){
    console.log('Parabéns sua Nota Conceitual é B');

}else if(notaDadaPorcentagem>=70){
    console.log('Sua Nota Conceitual é C');

}else if(notaDadaPorcentagem>=60){
    console.log('Sua Nota Conceitual é D');

}else if(notaDadaPorcentagem>=50){
    console.log('Nota Conceitual é E');

}else if(notaDadaPorcentagem<50){
    console.log('Nota Conceitual é F');

}
