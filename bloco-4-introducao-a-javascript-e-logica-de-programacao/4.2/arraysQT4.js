//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


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

if(media>20){
console.log('valor maior que 20-->>',media);
}else{
    console.log('valor menor ou igual a 20-->>',media);
}

