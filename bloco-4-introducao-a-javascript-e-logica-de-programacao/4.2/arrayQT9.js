//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .


let arrayNumerico = [];


for (let i = 1; i < 26; i += 1) {
    arrayNumerico.push(i);

}


for (const element of arrayNumerico) {
    console.log(element/2);
}
