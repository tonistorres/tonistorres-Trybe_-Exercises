

// window.onload=function(){

// }

let botao=document.getElementById('botao');

botao.addEventListener("mouseover",mouseEmCimaDoElemento);
botao.addEventListener("mouseleave",mouseSaiuDoElemento);
botao.addEventListener("click",mouseRecebeuClickNoElemento);

function mouseEmCimaDoElemento(event){
console.log('mouse em cima do elemento');
console.log(event.target);
console.log(event.type);
}

function mouseRecebeuClickNoElemento(){
    console.log('mouse RECEBEU   um Click no Elemento');
}

function mouseSaiuDoElemento(){

console.log('mouse saiu de cima do elemeno');

}