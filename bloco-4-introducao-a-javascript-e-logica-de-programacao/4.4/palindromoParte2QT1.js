/**1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

var str="desenvolvimento";


function reverseString(str) {
    return str.split("").reverse().join("");
}

function quebraString(str) {

    return str.split("").join("");

}

if(quebraString(str)===reverseString(str)){
console.log('true')

}else{
    console.log('false')

}