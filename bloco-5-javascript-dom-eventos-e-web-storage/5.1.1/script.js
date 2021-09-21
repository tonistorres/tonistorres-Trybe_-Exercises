/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()

1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

3. Crie uma função que mude a cor do quadrado vermelho para branco.

4. Crie uma função que corrija o texto da tag <h1>.

5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

//eititiemmel



/** Sobre window onload -É chamado quando o DOM está pronto, o que pode ser posterior às imagens e outro conteúdo externo é carregado. */
window.onload = function () {
      howDoYouSeeItTwoYearsFromNow();
      changeColorToGreenTrybe();
      changeColorFromRedSquareToWhite();
      correctText();
      convertsTiny();
      displayContentTagP();
};


/**
 *Irei utilizar a função getElementByTagName() para resolução desse Exercício
 * - O método getElementsByTagName () retorna uma coleção de todos os elementos no documento com o nome da tag especificada, como um objeto HTMLCollection.
 */

function howDoYouSeeItTwoYearsFromNow() {

      let captureTag = document.getElementsByTagName('p');

      for (let i = 0; i < captureTag.length; i += 1) {
            if (captureTag[i].innerText === '-----') {
                  captureTag[i].innerText = "Desenvolvedor Pleno Full Stack na Trybe rs";
                  captureTag[i].style.background = "rgb(76,164,109)";
                  captureTag[i].style.color = "white";
            }

      }

}
/**
 * O método getElementsByTagName () retorna uma coleção de todos os elementos no documento com o nome da marca especificada, como um objeto HTMLCollection.
 * 
 */

function changeColorToGreenTrybe() {

      let captureElementsTagName = document.getElementsByTagName('main');

      for (let i = 0; i < captureElementsTagName.length; i += 1) {

            captureElementsTagName[i].style.background = "rgb(76,164,109)";


      }


}

/**
 * getElementsByClassName() - 
O método getElementsByClassName () retorna uma coleção de todos os elementos no documento com o nome de classe especificado, como um objeto HTMLCollection.
 */

function changeColorFromRedSquareToWhite() {

      let captureElementContentCenter = document.getElementsByClassName('center-content');


      for (let i = 0; i < captureElementContentCenter.length; i += 1) {
            if (i == 0) {
                  captureElementContentCenter[i].style.background = "white";
            }

      }

}

function correctText() {
      document.getElementsByTagName('h1')[0].innerText = "Exercício 5.1 - JavaScript";
}


function convertsTiny() {

      let captureTextTagP = document.getElementsByTagName('p');
      let convertsTinyAll=document.getElementsByTagName('p');
      

      for (let i = 0; i < captureTextTagP.length; i += 1) {

            convertsTinyAll[i].innerText=captureTextTagP[i].innerText.toLowerCase();


      }

}

//6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function displayContentTagP(){


      let captureContent=document.getElementsByTagName('p');

      for (let i = 0; i < captureContent.length; i++) {
            console.log(captureContent[i].innerHTML);
            
      }


}