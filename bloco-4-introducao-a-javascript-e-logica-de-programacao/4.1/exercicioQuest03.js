/*
Faça um programa que retorne o maior de três números. 
Defina no começo do programa três constantes com os valores que serão comparados.
*/

const a=1,b=20,c=3;
let retorna='';

if(a>b && a>c){
console.log(retorna='a maior que b e c')
}else if(b>a && b>c){
    console.log(retorna='b maior que c e a')
}else{
    console.log(retorna='c maior que a e b')
}