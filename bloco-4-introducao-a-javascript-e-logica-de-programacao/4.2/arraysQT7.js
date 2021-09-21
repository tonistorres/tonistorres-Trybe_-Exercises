
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;
let menor=0;

for (var i = 0; i < numbers.length; i += 1) {


    if (numbers[i] > maior) {

        maior = numbers[i];
    }

    
}

// menor recebe o maior numero contido dentro do array 
 menor=maior;


for (var i = 0; i < numbers.length; i += 1) {

//se numero na posição i for menor que menor ele entra no bloco condicional simples if 
    if (numbers[i] < menor) {
//automoaticamente a variável recebe esse menor numero e assim ocorrerá o fluxo fazendo com que todos numeros do array seja testado 
//no final ficará o número menor feito as substituições na variável menor 
        menor = numbers[i];
    }
    
}

console.log('Menor número contido no array é ::',menor);




