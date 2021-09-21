/*
Documentação https://www.w3schools.com/
O método querySelector () retorna o primeiro elemento que corresponde a um seletor (es) CSS especificado (s) no documento.
*/
window.onload = function () {
    accessElementWhereAreYou(); //QT 01
    acessElementFather();//QT 02
    accessFirstSon(); //QT 03
    accessFirstSonFromTheFather();//QT 04
    accessFirstSonStartingPoint();//QT 05
    //attention();
    treeSon();// QT 07
    treeSonFather();//QT 08
    //exercicio II
    createSon(); //QT 01
    createSonOnHere(); //QT02
    createSonToSonOfSon(); //QT 03
    accessTreeSon(); // QT 04

}

//EXERCICIO II -1- Crie um irmão para elementoOndeVoceEsta .
//Fonte:http://devfuria.com.br/javascript/dom-create-element/
function createSon() {
    //Elemento PAI
    let elementoPai = document.getElementById('elementoOndeVoceEsta').parentElement;
    //Cria Elemento  
    let divNova = document.createElement("div");
    //adicionando uma ID ao elemento novo criado 
    divNova.setAttribute("id", "element-new");
    //colocando um estilo para div
    divNova.style.background = "#ff6666";
    divNova.style.color = "white";
    //Criando um nó de texto  
    let conteudoNovo = document.createTextNode("Irmão - Criando de forma dinâmica");
    //Anexando a divNova o conteudo novo criado
    divNova.appendChild(conteudoNovo);
    elementoPai.appendChild(divNova);
}

//EXERCICIO II -2-Crie um filho para elementoOndeVoceEsta 
function createSonOnHere() {
    //Elemento Pai -  Onde Estou 
    let elementoPai = document.getElementById('elementoOndeVoceEsta');
    //criando elemento novo no HTML via JavaScript
    let divNova = document.createElement("div");
    //adicionando uma classe a ele 
    divNova.setAttribute("id", "id-son-create");
    //colocando um estilo para div
    divNova.style.background = "#ff1a1a";
    divNova.style.color = "white";
    //Criando um nó de texto 
    let conteudoNovo = document.createTextNode("Filho de Onde Estou - criado de forma dinâmica");
    //Anexando a divNova um Conteudo
    divNova.appendChild(conteudoNovo);
    //anexando tudo ao elemento Pai
    elementoPai.appendChild(divNova);
}

//EXERCICIO II -3-Crie um filho para primeiroFilhoDoFilho 
function createSonToSonOfSon() {
    //Elemento Pai - Primeiro Filho do Filho 
    let elementoPai = document.getElementById('primeiroFilhoDoFilho');
    //criando elemento novo no HTML via JavaScript
    let divNova = document.createElement("div");
    //criando um id dinamicamente
    divNova.setAttribute("id", "id-neto");
    //colocando um estilo pra div
    divNova.style.background = "#990000";
    divNova.style.color = "white";
    //Criando um nó de texto 
    let conteudoNovo = document.createTextNode("Eu sou NETO!!-criado de forma dinâmica");
    //Anexando a divNova um Conteudo
    divNova.appendChild(conteudoNovo);
    //anexando tudo ao elemento Pai
    elementoPai.appendChild(divNova);
}

//EXERCICIO II -4-A partir desse filho criado, acesse terceiroFilho
function accessTreeSon() {
    //Elemento Pai - Primeiro Filho do Filho 
    let captureElement = document.getElementById('element-new').previousElementSibling.previousElementSibling;
    captureElement.style.setProperty('background', 'black');
    captureElement.style.setProperty('color', 'white');
    captureElement.style.setProperty('font-style', 'italic');
}

//1- Acesse o elemento elementoOndeVoceEsta .
function accessElementWhereAreYou() {
    let captureElement = document.getElementById('elementoOndeVoceEsta');
    captureElement.style.background = "#006600";
    captureElement.style.color = "white";
    captureElement.style.textAlign = "center";
    captureElement.style.fontFamily = "Arial";
    captureElement.style.fontSize = "20px";
}

//2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
function acessElementFather() {
    let captureElement = document.getElementById('elementoOndeVoceEsta').parentElement;
    captureElement.style.background = "yellow";
    captureElement.style.color = "black";
    captureElement.style.textAlign = "center";
    captureElement.style.fontFamily = "Arial";
    captureElement.style.fontSize = "20px";
}

//3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele
function accessFirstSon() {
    let captureElement = document.getElementById('primeiroFilhoDoFilho');
    captureElement.innerText = "QT 03 - Acessando Primeiro Filho Do Filho Via JavaScript - Adicionando Mensagem";
    captureElement.style.background = " #ff8080";
    captureElement.style.color = "white";
    captureElement.style.textAlign = "center";
    captureElement.style.fontFamily = "Arial";
    captureElement.style.fontSize = "20px";
}

//4-Acesse o primeiroFilho a partir de pai .
function accessFirstSonFromTheFather() {
    let captureElement = document.getElementById('pai').firstElementChild;
    captureElement.innerHTML = '<div>QT 04 - Primeiro Filho Acessado a partir do Pai Via JavaScript</div>';
    captureElement.style.background = " #ffb3b3";
    captureElement.style.color = "black";
    captureElement.style.textAlign = "center";
    captureElement.style.fontFamily = "Arial";
    captureElement.style.fontSize = "20px";
}

//5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
function accessFirstSonStartingPoint() {
    let captureElement = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
    captureElement.innerText += ' - QT 05 Respondida';
}

//6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta 
function attention() {
    //como eu incrementei a forma de fazer o exercício essa sexta questão não tem 
    //mais a mesma caracteristica que deveria ter para poder executar um código 
    //de acordo com o pedido pelo course

}

//7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta 
function treeSon() {
    let captureElement = document.getElementById('elementoOndeVoceEsta').nextElementSibling;
    captureElement.innerText = " QT 07 - Terceiro Filho ";
    captureElement.style.background = "#d147a3";
    captureElement.style.color = "white";
    captureElement.style.textAlign = "center";
    captureElement.style.fontFamily = "Arial";
    captureElement.style.fontSize = "20px";
}

//8-Agora acesse o terceiroFilho a partir de pai .
function treeSonFather() {
    let captureElement = document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling;
    captureElement.innerText += captureElement.innerText + "QT 08 Respondida"

}