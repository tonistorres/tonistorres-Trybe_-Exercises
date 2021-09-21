//Utilizando for , descubra qual o maior valor contido no array e imprima-o;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*Utilizaremos uma variável com o nome de maior e inicializaremos ela com zero*/
let maior = 0;

//faremos o for para percorrer todo array iterando de 1 em 1 
for (var i = 0; i < numbers.length; i += 1) {

    /*
    Neste ponto iremos utilizar uma estrutura condicional simples para fazer a seguinte verificação
    se nubers na posição i for >(maior que ) que a variavel maior inicializada com zero então ela entra
    no bloco condicional 
    
    */

    if (numbers[i] > maior) {
        /*
        Dentro do bloco condicionnal a variável maior inicializada com zero caso nubers[i] for maior 
        que o valor contido na variável maior a variavel maior recebe esse teste ocorrera com cada elemento 
        pertencente ao array no final ficara contido dentro da variável maior o maior número do array 
        recebe maior */

        maior = numbers[i];
    }
}
console.log('Número Máximo -->>', maior);