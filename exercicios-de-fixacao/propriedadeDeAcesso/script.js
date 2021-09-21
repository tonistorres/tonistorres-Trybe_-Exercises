
window.onload = function () {
    whereAreYou();
    accessFatherFromSon();
    acessTextAttention();
    accessFatherFromFather();
    primeiroFilhoDoPai();
    primeiroFilhoDoFilho();
    primerioFilhoApartirDoElementoOndeEsta();
    accessTreeSon();
    accessTreeSonFather();

}


//1-Acesse o elemento elementoOndeVoceEsta .
function whereAreYou() {
    let captureWhereAreYou = document.getElementById('elementoOndeVoceEsta');
    captureWhereAreYou.style.background = "black";
    captureWhereAreYou.style.color = "white";
    captureWhereAreYou.style.fontFamily = "Impact,Charcoal,sans-serif";
    captureWhereAreYou.style.fontFamily = "Impact,Charcoal,sans-serif";
    captureWhereAreYou.style.textAlign = "center";


}

//2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

function accessFatherFromSon() {
    let captureFalher = document.getElementById('elementoOndeVoceEsta').parentElement;
    captureFalher.style.background = "yellow";
    captureFalher.style.color = "black";


}



//3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele
function primeiroFilhoDoFilho() {
    let primeiroFilhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
    primeiroFilhoDoFilho.innerHTML = "QT 03 - function primeiroFilhoDoFilho() - Acessando elemento de onde você está";
    primeiroFilhoDoFilho.style.background = "white";
    primeiroFilhoDoFilho.style.color = "black";
}



//4-Acesse o primeiroFilho a partir de pai . 

function primeiroFilhoDoPai() {
    let capturePrimeiroFilhoDoPai = document.getElementById('elementoOndeVoceEsta').parentElement.firstElementChild;
    capturePrimeiroFilhoDoPai.innerHTML = "QT 04 - primeiroFilhoDoPai()-Primeiro Filho do Pai acessado a partir de onde você esta";
    capturePrimeiroFilhoDoPai.style.background = "blue";
    capturePrimeiroFilhoDoPai.style.color = "white";

}



//5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta 

function primerioFilhoApartirDoElementoOndeEsta() {

    let capturePrimeiroFilho = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
    capturePrimeiroFilho.innerHTML = "QT 05 - SOBRESCREVENDO QT 04 - AS DUAS FAZEM ACESSO AO PRIMEIRO FILHO";
    capturePrimeiroFilho.style.textAlign = "center";
    capturePrimeiroFilho.style.background = "darkslategray";

}


//6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta 

function acessTextAttention() {
    let captureFalher = document.getElementById('elementoOndeVoceEsta').parentElement;
    captureFalher.style.fontFamily = "Impact,Charcoal,sans-serif";

}

//7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
function accessTreeSon() {

    let caputreAccessTreeSon = document.getElementById('elementoOndeVoceEsta').nextElementSibling;
    caputreAccessTreeSon.innerHTML = "QT 07 - Acessando Terceiro Filho - funcition accessTreeSon()";
}

//8-Agora acesse o terceiroFilho a partir de pai .
function accessTreeSonFather() {

    let listaFilhos = document.getElementById('elementoOndeVoceEsta').parentElement.children;

    for (let i = 0; i < listaFilhos.length; i++) {
        console.log(listaFilhos[i]);
        if (i === 2) {
            listaFilhos[i].innerText = "QT 08 SUBSCREVE QT 09 - accessTreeSonFather()";
        }

    }

}


//Acesse O Pai do Pai (Avô) a partir de onde você está
function accessFatherFromFather() {
    let captureFatherFromFather = document.getElementById('elementoOndeVoceEsta').parentElement.parentElement;
    captureFatherFromFather.style.background = "red";
    captureFatherFromFather.style.color = "white";
    captureFatherFromFather.style.fontFamily = "Impact,Charcoal,sans-serif";
    captureFatherFromFather.style.textAlign = "center";



}