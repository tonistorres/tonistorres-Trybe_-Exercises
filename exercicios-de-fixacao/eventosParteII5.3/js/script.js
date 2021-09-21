//********************************************************************* */ 
//Direitos Intelectuais
//https://www.guj.com.br/t/executar-funcao-ao-pressionar-enter-nao-jquery/336851
//https://developer.mozilla.org
//https://www.w3schools.com/
//Implementação:Tonis Torres 
//******************************************************************** */
//primeira capturar o elemento 
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
let classTechSet = document.querySelector('.tech');
let captureElement = document.getElementsByTagName('body');

// 1. Copie esse arquivo e edite apenas ele;
// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//******************************************************* */
//COLOCANDO ESCUTA NOS ELEMENTOS -addEventListener()
//****************************************************** */
firstLi.addEventListener("click", criateClassElementClickI);
firstLi.addEventListener("mouseleave", restartCrieteClassElementClickI);
secondLi.addEventListener("click", createClassElementClickII);
secondLi.addEventListener("mouseleave", restartCrieteClassElementClickII);
thirdLi.addEventListener("click", createClassElementClickIII);
thirdLi.addEventListener("mouseleave", restartCrieteClassElementClickIII);
input.addEventListener("focus", errorHandling);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keypress', function (e) {
  if (firstLi.getAttribute("class") === "tech") {
    if (e.keyCode == 13) { // codigo da tecla enter
      // colocas aqui a tua função a rodar
      firstLi.innerText = "";
      //estilizando via javaScript
      firstLi.style.setProperty("font-size", "25px");
      firstLi.style.setProperty("font-weight", "bold");
      firstLi.innerText += this.value
    }
  } else if (secondLi.getAttribute("class") === "tech") {
    if (e.keyCode == 13) { // codigo da tecla enter
      // colocas aqui a tua função a rodar
      secondLi.innerText = "";
      //estilizando via javaScript
      secondLi.style.setProperty("font-size", "25px");
      secondLi.style.setProperty("font-weight", "bold");
      secondLi.innerText += this.value
    }
  } else {
    if (e.keyCode == 13) { // codigo da tecla enter
      // colocas aqui a tua função a rodar
      thirdLi.innerText = "";
      //estilizando via javaScript
      thirdLi.style.setProperty("font-size", "25px");
      thirdLi.style.setProperty("font-weight", "bold");
      thirdLi.innerText += this.value
    }
  }
});

//trtando o campo input
function errorHandling() {
  input.value = "";
}
// 2.1. Deve existir apenas um elemento com a clas  se 'tech'. Como você faz isso?
//Criau uma função 
function criateClassElementClickI() {
  if (secondLi.getAttribute("class") === "tech" || thirdLi.getAttribute("class") === "tech") {
    //regra de negocio 
    firstLi.setAttribute("class", "tech");
    input.setAttribute("placeholder", "Alterar a primeira tecnologia");
    secondLi.removeAttribute("class");
    thirdLi.removeAttribute("class");
    //estilização
    firstLi.style.background = "#333300";
    firstLi.style.color = "white";
    firstLi.style.setProperty("font-size", "20px");
    input.style.background = "#333300";
    input.style.color = "white";
  } else {
    //regra de negocio 
    firstLi.setAttribute("class", "tech");
    input.setAttribute("placeholder", "Alterar a primeira tecnologia");
    secondLi.removeAttribute("class");
    thirdLi.removeAttribute("class");
    //estilização
    firstLi.style.background = "#333300";
    firstLi.style.color = "white";
    firstLi.style.setProperty("font-size", "20px");
    input.style.background = "#333300";
    input.style.color = "white";
  }
}

//Funções de restart - configurações de propriedades css originais 
function restartCrieteClassElementClickI() {
  firstLi.style.background = "#2fc18c";
  firstLi.style.setProperty("font-size", "15px");
}

//Criar uma função para o evento click no elemento 2
function createClassElementClickII() {
  if (firstLi.getAttribute("class") === "tech" || thirdLi.getAttribute("class") === "tech") {
    //regra de negocio
    firstLi.removeAttribute("class");
    thirdLi.removeAttribute("class");
    secondLi.setAttribute("class", "tech");
    input.setAttribute("placeholder", "Alterar a segunda tecnologia");
    //estilização
    secondLi.style.background = "#ff4d4d";
    secondLi.style.color = "white";
    secondLi.style.setProperty("font-size", "20px");
    input.style.background = "#ff4d4d";
    input.style.color = "white";
  } else {
    //regra de negocio
    firstLi.removeAttribute("class");
    thirdLi.removeAttribute("class");
    secondLi.setAttribute("class", "tech");
    input.setAttribute("placeholder", "Alterar a segunda tecnologia");
    //estilização
    secondLi.style.background = "#ff4d4d";
    secondLi.style.color = "white";
    secondLi.style.setProperty("font-size", "20px");
    input.style.background = "#ff4d4d";
    input.style.color = "white";
  }

}

//Funções de restart - configurações de propriedades css originais 
function restartCrieteClassElementClickII() {
  secondLi.style.background = "#006dfb";
  secondLi.style.setProperty("font-size", "15px");
}

//Criar uma função para o evento click no elemento 3
function createClassElementClickIII() {
  if (firstLi.getAttribute("class") === "tech" || secondLi.getAttribute("class") === "tech") {
    //regra de negocio 
    firstLi.removeAttribute("class");
    secondLi.removeAttribute("class");
    thirdLi.setAttribute("class", "tech");
    input.setAttribute("placeholder", "Alterar a terceira tecnologia");
    //estilização
    thirdLi.style.background = "#ff9966";
    thirdLi.style.color = "white";
    thirdLi.style.setProperty("font-size", "20px");
    input.style.background = "#ff9966";
    input.style.color = "white";
  } else {
    //regra de negocio 
    firstLi.removeAttribute("class");
    secondLi.removeAttribute("class");
    thirdLi.setAttribute("class", "tech");
    input.setAttribute("placeholder", "Alterar a terceira tecnologia");
    //estilização
    thirdLi.style.background = "#ff9966";
    thirdLi.style.color = "white";
    thirdLi.style.setProperty("font-size", "20px");
    input.style.background = "#ff9966";
    input.style.color = "white";
  }
}

//Funções de restart - configurações de propriedades css originais 
function restartCrieteClassElementClickIII() {
  thirdLi.style.background = "#41197f";
  thirdLi.style.setProperty("font-size", "15px");
}
function addClassTeck() {
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener("dblclick", doubleClickRedirect);
function doubleClickRedirect() {
  myWebpage.innerText = 'Meu top 3 do Spotrybefy- Evento Duplo Click Blog Trybe e Portifólio';

  window.open('https://blog.betrybe.com/', '_blank');
  window.open('https://tonistorres.github.io/', '_blank');

}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener("mouseover", mouseOverChangeColor);
myWebpage.addEventListener("mouseleave", mouseExitReturnColor);

function mouseOverChangeColor() {
  myWebpage.style.color = "#99ff99";
  myWebpage.style.setProperty("font-size", "50px");
  captureElement[0].style.background = "white";
}
function mouseExitReturnColor() {
  myWebpage.style.color = "white";
  myWebpage.style.setProperty("font-size", "25px");
  captureElement[0].style.background = "#333";
}
// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
firstLi.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.