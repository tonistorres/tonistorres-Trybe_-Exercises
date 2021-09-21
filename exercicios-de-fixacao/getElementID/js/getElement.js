/** 
 * RESUMO:
 -- getElementByID()- retorna UM ÚNICO ELEMENTO capturado pelo seu ID;

-- getElementsClassName() - retorna UM HTMLCOLLECTION uma lista com todos elemento pertencente a classe pesquisada no seu HTML, vale apenas ressaltar que embora seja UM ÚNICO elemento pertencente uma determinada Classe ele retornará esse elemento no FORMATO DE LISTA;

-- getElementsByTagName() - retrona UM HTMLCOLLECTION uma LISTA CONTENDO TODOS OS ELEMENTOS REFERENTE a tag passada no argumento da função;

//*******************************************************
//TROCADOS EM MIÚDOS - NA VIDA REAL TENTE USAR MAIS     //
//A FUNÇÃO querySelector() e a querySelectorAll() pois   //
//elas são mais flexíveis e mais usuais. Em vez de ficar  //
//preso a especificidade de cada função                   //
//********************************************************
//SELETORES CSS DOCUMENTAÇÃO:https://www.w3schools.com/cssref/css_selectors.asp
**************************************************************
--querySelector() - Essa Função retorna um Elemento e o Primeiro Elemento da condição passada no Argumento, Argumento esse que recebe UMA CONSTRUÇÃO DE SELETOR CSS para fazer a busca na página HTML.Ela é mais "Flexível" que as getElementByID() e a característica mais marcante dela é retorna UM ÚNICO ELEMENTO E O PRIMEIRO ELEMENTO ENCONTRADO após executar a pesquisa na Pagina via Argumento passado em formatos seletores de CSS * 
--querySelectorAll() - retorna todos os elementos no documento que correspondem a um seletor (es) CSS especificado, como um objeto NodeList estático.
/** */

/** Sobre window onload -É chamado quando o DOM está pronto, o que pode ser posterior às imagens e outro conteúdo externo é carregado. */

window.onload = function () {
    changeColorHeader();
    changeColorBody();
    backgroundSecitons();
};


let botao=document.getElementById('botao');
botao.addEventListener("mouseover",mouseEmCimaDoElemento);
botao.addEventListener("mouseleave",mouseSaiuDoElemento);


function mouseEmCimaDoElemento(){
console.log('Em cima do Elemento ');

}

function mouseSaiuDoElemento(){
console.log('Saiu de cima do Elemento');
}


/*Essa função BUSCA na pagina HTML um conteúdo compara e devolve ele 
com outra mensagem utilizando o document.getElementByID() - Esse método
não retorna Lista mais trabalha apenas o ID de um único elemento
*/

function capturandoValorPaginaHtml() {
    
    //caputando conteúdo de uma paǵina HTML
    var paragrafo = document.getElementById("page-title").innerText;

    if (paragrafo === 'MANIPULANDO O DOM' || paragrafo === 'Testando Funcionalidade getElementByID(). No HTML evento onmouseover()') {
        document.getElementById("page-title").innerText = "Testando Funcionalidade getElementByID(). No HTML evento onmouseover()";
        document.getElementById("page-title").style.background = "#8C5B65";
        document.getElementById("page-title").style.color = "#FFCFD9";
        document.getElementById("page-title").style.fontSize = "x-large";
        document.getElementById("page-title").style.fontFamily = "Impact,Charcoal,sans-serif";

    } else {
        document.getElementById("page-title").innerText = "Título do Else Bugou o Código";
        document.getElementById("page-title").style.background = "#8C5B65";
        document.getElementById("page-title").style.color = "#FFCFD9";
        document.getElementById("page-title").style.fontSize = "x-large";
        document.getElementById("page-title").style.fontFamily = "Impact,Charcoal,sans-serif";

    }
}






// Uitlizar uma boa prática de programação aqui 



function buttonColorParagraph() {
    let capturingQuerySelector = document.querySelector('#paragraph');
    capturingQuerySelector.innerText = "OPs!!! Evento onclick(html). E para capturar o ID utilizei a função querySelector(#paragraph)";
    document.getElementById('paragraph').style.color = "darkslategray";
    document.getElementById('paragraph').style.fontSize = "x-large";
    document.getElementById('paragraph').style.fontFamily = "Impact,Charcoal,sans-serif";
    document.getElementById('paragraph').style.background = "burlywood";
}

/*Nesta função estamos fazendo uma busca usando o document.getElementByID
que retorna busca um único elemento na Pagina HTML neste caso NÃO RETORNA 
LISTA mais apenas o elemento que foi feito a CAPTURA
*/
function usingIdelements() {
    var modificaFrasePeloID = document.getElementById("subtitle").innerText = "Passou o Mouse Por Aqui!! Eu (Function) fui executada por meio do Evento onmouseover. Obrigado pela força getElementID() ";
    const variabaleStyle = document.getElementById('subtitle');
    variabaleStyle.style.background = "#8C5B65";
    variabaleStyle.style.color = "#FFCFD9";
    variabaleStyle.style.fontFamily = "Impact,Charcoal,sans-serif";
    variabaleStyle.style.fontSize = "x-large";
}

function secondParagraphOnMouseOver() {
    let valueSecondParagraph = document.getElementsByTagName('p');
    for (let i = 0; i < valueSecondParagraph.length; i++) {
        if (valueSecondParagraph[i].innerText === 'Segundo parágrafo!') {
            valueSecondParagraph[i].innerText = 'UII!! sou Segundo Parágrafo. Fui capturado pela funciton getElementsByTagName()vocês Conhecem? Passaram o mouse sobre mim senti um arrepio e logo executei. Esse evento onmouseover!! chatinho ele né?';
            valueSecondParagraph[i].style.color = "darkslategray";
            valueSecondParagraph[i].style.fontSize = "x-large";
            valueSecondParagraph[i].style.fontFamily = "Impact,Charcoal,sans-serif";
            valueSecondParagraph[i].style.background = "burlywood";
        }

    }

}

/*A função getElementByClassName retorna uma LISTA e pelo indice dessa lista
é feita verificações e mudança de textos acontece no evento onmouseover na 
pagina html  */
function behaviorListPFamily() {
    let namesFamily = document.getElementsByClassName("p-familia");
    for (let i = 0; i < namesFamily.length; i++) {
        if (i === 0) {
            namesFamily[i].innerText = "Eu Sou getElementsByClassName() retorno elementos em forma de Lista uma espécie de HtmlCollections";
        } else if (i === 1) {
            namesFamily[i].innerText = "Fui hospedado uns dias aqui no HTML dessa pagina WEB no evento onmouseover você já me conhecem estou sendo muito executado nessa página";
        } else {
            namesFamily[i].innerText = "O Doctor me passa como comida (argumento) sempre uma tag HTML você sabe como é né comida regrada rsrs não sou muito flexível rsrs";
        }
    }
}

/*função acessa os elementos por classe retorna uma LISTA DE ELEMENTOS
de todos elementos HTML que possui aquela determinada classe
embutida na sua tag */

//Recupere os seus parágrafos via código JavaScript , 
//usando a função getElementsByClassName ;

function recoverParagraph() {
    let recover = document.getElementsByClassName('a-class');
    let result = document.getElementsByClassName('result');
    let titleSection = document.querySelector('.fundo-sections');
    titleSection.innerText = 'Recuperando valor do documento HTML utilizando querySelector(".fundo-section")'
    for (let i = 0; i < recover.length; i++) {
        recover[i].innerText;
        result[i].innerText = recover[i].innerText + ' Fui Recuperado UFA!!';
        result[i].style.background = "burlywood";
        result[i].style.color = "darkslategray";
    }
    //trabalhando conceito de função dentro de função 
    recoverParagraphResult();
}

function recoverParagraphResult() {
    let titleSectionResultado = document.querySelectorAll('.fundo-sections');
    for (let i = 0; i < titleSectionResultado.length; i++) {
        if (titleSectionResultado[i].innerText === 'RESULTADO DA CAPTURA') {
            titleSectionResultado[i].innerText = 'Bem Meu Nome é Resultado. Fui capturado por um Elemento chamado querySelectorAll, me disseram que ele retorna uma especíe de NodeList. Bem minha posição dentro desse HTML é a posição [1]. Se puderem me ajudar liguem para O Button preciso ser Recuperado';
        }
    }
}

function backgroundSecitons() {
    let catchBackGround = document.getElementsByClassName('fundo-sections');
    for (let i = 0; i < catchBackGround.length; i++) {
        catchBackGround[i].style.background = "#8C5B65";
        catchBackGround[i].style.color = "#FFCFD9";
        catchBackGround[i].style.fontSize = "x-large";
        catchBackGround[i].style.fontFamily = "Impact,Charcoal,sans-serif";
    }
}

/**Nesta função estao utilizando o document.getElementByTagName para buscar
 * todas as tags existentes no meu Documento HTML conforme passada no parâ-
 * metro da função
 */

function changeColorBody() {
    var element = document.getElementsByTagName('body')[0].style.background = "#FFCFD9";
}

function changeColorHeader() {
    document.getElementsByTagName('header')[0].style.background = "#8C5B65";
    document.getElementsByTagName('header')[0].style.color = "#FFCFD9";
}

