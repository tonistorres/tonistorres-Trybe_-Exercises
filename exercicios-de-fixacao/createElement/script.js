document.body.onload = adcElemento;

function adcElemento () {
  // cria um novo elemento div
  // e dá à ele conteúdo
  var divNova = document.createElement("div");

  var conteudoNovo = document.createTextNode("Olá, cumprimentos!");

  
  divNova.appendChild(conteudoNovo); //

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("div1");
  document.body.insertBefore(divNova, divAtual);
}

