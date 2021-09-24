/*Criando um estrutura de array para teste*/
const numeros = [1, 2, 3, 4, 6, 8, 9];

//criando a função que irá executar o algoritmo
function numerosPares(array) {
    // criando um array vazio onde será adicionado os numeros pares 
    const numerosPares = [];

    //criando a estrutura de repetição que irá percorre o suposto array que será passado 
    for (let i = 0; i < numeros.length; i += 1) {

        //criando o filtro para que irá triar os numeros pares
        if (numeros[i] % 2 === 0) {
            //adicionando os numeros pares ao array vazio por meio do método push
            numerosPares.push(numeros[i]);
        }
    }

    //retornando os numeros pares 
    return numerosPares;

}
//fazendo a chamada da função passando o parametro e imprimindo o retorno no metodo 
//console.log 
console.log(numerosPares(numeros));