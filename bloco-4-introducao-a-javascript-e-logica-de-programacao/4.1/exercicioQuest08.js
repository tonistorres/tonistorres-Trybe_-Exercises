/*
Escreva um programa que defina três números em constantes e retorne
true se pelo menos uma das três for par. 
Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

a =1;
b=9;
c=11;

//bem aqui iniciamos um flag sendo falsa 
let isFlag=false;

//se em a, b, ou c haver pelo menos um número par então entra no bloco condicional if  
if(a%2===0 || b%2===0 ||c%2===0){
//estando no bloco condicional a flag será atribuida de true     
isFlag=true;
 }
 //quando sair do bloco ela impre no console o valor de true ou false 
 //Quando: 
 //isFlag entrar no bloco true ela será atribuida de true e console imprime true 
 //se ela não entrar no bloco true então ela simplesmente imprime o valor setado false logo no inicio da sua inicialização
 console.log(isFlag);