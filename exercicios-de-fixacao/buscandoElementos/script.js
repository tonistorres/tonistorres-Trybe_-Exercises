window.onload = function () {
    addListDynamically();
    addListDynamicallyMethodPreparation();

}
let arrayPreparo = [
    'Coloque o óle em uma panela e doure a cebola',
    'Adicione o alho, sal e os ovos',
    'Refogue o feijão, baixe o fogo'
];
/*funciona como se tivessemos um banco de dados e tivéssemos que adicionar esses elementos de forma dinamica no meu html mais especificamente na minha lista recuperada ul
*/
let arrayIngredientes = [
    '500g de feijão carioquinha cozido',
    'ingredient-item 200g de toucinho',
    'ingredient-item 1 concha de óleio',
    'ingredient-item 1 cebola média picada',
    'ingredient-item 4 dentes de alho',
    'ingredient-item 5 ovos',
    '1 colher de sopa de sal com alho',
    'ingredient-item Cheiro verde a gosto',
    'ingredient-item 200g de farinha de mandioca'
];
/*
Quando formos trabalhar capturando a classe pertencente a nossa lista ul utilizar querySelector e querySelectorAll para captura
*/
function addListDynamically() {
    let containerUL = document.querySelector('.ingredients-list');
    for (let i = 0; i < arrayIngredientes.length; i += 1) {
        let ingredientListItem = document.createElement('li');
        ingredientListItem.innerText = arrayIngredientes[i];
        containerUL.appendChild(ingredientListItem);
    }
}

function addListDynamicallyMethodPreparation() {
    let containerOL=document.querySelector('.recipe-preparation-list');
    for (let i = 0; i < arrayPreparo.length; i+=1) {
        //criar um elemento html dianâmico para colocar na list ordenada
        let objectCreateLi=document.createElement('li');
        objectCreateLi.innerText=arrayPreparo[i];
        objectCreateLi.style.color="orange";
        objectCreateLi.style.fontFamily="Impact,Charcoal,sans-serif";
        containerOL.appendChild(objectCreateLi);
   }
}