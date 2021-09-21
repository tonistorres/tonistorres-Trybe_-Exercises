/*
10-Escreva um programa que se inicie com dois valores
 em duas constantes diferentes:
 o custo de um produto e seu valor de venda.
  A partir dos valores, calcule
 quanto de lucro (valor de venda descontado o custo
 do produto) a empresa terá ao vender mil desses 
 produtos.
 
 *Atente que, sobre o custo do produto, incide um imposto de 20%.
 
 *Seu programa também deve emitir uma mensagem de erro e encerrar 
 caso algum dos seus valores de entrada seja menor que zero.

 *O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo,
  sendo que o imposto de 20% também faz parte do valor de custo.

        *  valorCustoTotal = valorCusto + impostoSobreOCusto
        *  lucro = valorVenda - valorCustoTotal (lucro de um produto)

 */

const custoDoProduto = 50;//Preço de compra 
const valorDeVenda =100;// Preço de venda

let lucro = (valorDeVenda - (custoDoProduto + (20 / 100)));//lucro é o valor da venda menos custo do produto acrescido de 20% imposto sobre o produto
let numeroDevendaPorProduto = 1000;
let lucroTotalDasvendas;
let mensagemErro1 = "Valor menor que zero sai fora do requesito da empresa";
let mensagemErro2 = "<<---Encerrando o Sistema-->>>";


if (custoDoProduto < 0 || valorDeVenda < 0) {
    console.log(mensagemErro1);
    console.log(mensagemErro2);


} else {

    lucroTotalDasvendas = numeroDevendaPorProduto * lucro;
    console.log(lucroTotalDasvendas);
}