

//***************************************** */
//Utilizando com Fonte de Apoio de Pesquisa:/
//https://www.w3schools.com/               /  
//****************************************/


//Funções iniciais serão executadas logo apões a reiderização
// de todos elementos HTML tendo em vista que o link para 
//o arquivo externo javaScript está logo no fim da pagina HTML
window.onload = function () {
    bodyContainerBackGround(); //cor de fundo body corpo
    headerContainerBackGround();// cor de fundo header cabeçalho
    emergencyTasksBackGround();//cor de fundo emergency-tasks 
    noEmergencyTasksBackGround();//cor de fundo no-emergency-tasks
    footerContainerBackGroud();//cor de fundo rodapé 
    listCaptionEmergencyBackGround();//cor de fundo Lista de tags h3
};



/*colocar fundo no cabeçalho da página - Utilizamos nesse exemplo a função 
querySelector que nos retorna 01(um) elemento E O PRIMEIRO elemento que 
corresponde a um seletor (es) CSS especificado (s) no documento.*/

function headerContainerBackGround() {
    const captureElementHeaderContainer = document.querySelector('#header-container');
    captureElementHeaderContainer.style.background = "#036b52";

}

function emergencyTasksBackGround(){
    const captureElementEmergency=document.querySelector('.emergency-tasks');
    captureElementEmergency.style.background="pink";
}

function noEmergencyTasksBackGround(){
    const captureElementNoEmergencyTasks=document.querySelector('.no-emergency-tasks');
    captureElementNoEmergencyTasks.style.background="yellow";
}

/*
Função tem por objetivo capturar todos elementos h3 da pagina html 
utilizando o método querySelectorAll que retorna uma lista de acordo
com o seletor passado no formato css.
Para execução da tarefa foi criado uma for com estrutura condicional
acoplada dentro

Conceito|Fonte | https://www.w3schools.com/
O método querySelectorAll () retorna todos os elementos
no documento que correspondem a um seletor (es) CSS especificado, 
como um objeto NodeList estático.

*/ 

function listCaptionEmergencyBackGround(){

    const captureListCaptionEmergency=document.querySelectorAll('h3');

    for (let i = 0; i <captureListCaptionEmergency.length; i+=1) {
        console.log('<---->'+i);

        if(i===0 || i===1){
            captureListCaptionEmergency[i].style.background="#ff00bf";
        }else{
            captureListCaptionEmergency[i].style.background="black";
        }
        
    }

}


/*
Colocar Cor de fundo no corpo da pagina utilizando a função getElementById
para capturar elementos da classe container 

*/
function bodyContainerBackGround(){

    const captureElementContainer=document.getElementById('container');
    captureElementContainer.style.background="white";


}

function footerContainerBackGroud(){
    const captureElementFooterContainer=document.getElementById('footer-container');
    captureElementFooterContainer.style.background="#036b52";


}