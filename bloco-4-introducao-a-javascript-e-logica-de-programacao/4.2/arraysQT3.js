//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma=0;
let media;

for (let index = 0; index < numbers.length; index+=1) {
    
    soma+=numbers[index];
}

//a média é tirada através do somatório de todos algarismos dividido pela quantidade de elemento contidos dentro 
//arrei nesse caso que estamos trabalhando para isso utilizamso o array mais o comprimento ou a quantidaded de elementos 
//contidos nesse array nubers.lenght
media=soma/numbers.length;
console.log('A média aritmética é:',media);