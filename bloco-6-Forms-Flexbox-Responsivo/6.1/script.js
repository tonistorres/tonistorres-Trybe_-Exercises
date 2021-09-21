

/*******************************************************************/
//FONTE DE PESQUISA:
//https://www.youtube.com/watch?v=kUeb3E5oLac
//https://github.com/codelie/validaData/blob/master/validaData.js
//https://www.w3schools.com/jsref/jsref_isnan.asp
//IMPLEMENTAÇÕES: TONIS TORRES
//************************************************************* */

window.onload = function () {
    generateStatesDynamically();
}

let startDateEmployment = document.querySelector('#dtinicio-emprego');
const buttomSubmit = document.querySelector('#buttom-submit');
const resultDate = document.querySelector('#result-date');

const arrayUfs = [
    'Acre', 'Alagoas', 'Amapa', 'Amazonas', 'Bahia', 'Ceara', 'Distrito Federal', 'Espirito Santo', 'Goiás',
    'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Para', 'Paraíba', 'Parana', 'Pernambuco',
    'Piaui', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
    'São Paulo', 'Sergipe', 'Tocantins'
];

function generateStatesDynamically() {
    //capturando o container principal no doc HTML    
    const caputeUf = document.querySelector('#uf-pessoal');

    //utilizando um laço de repetição for apra popular ufs
    for (let i = 0; i < arrayUfs.length; i += 1) {
        let ufsListItem = document.createElement('option');
        ufsListItem.innerText = arrayUfs[i];
        caputeUf.appendChild(ufsListItem);
    }
}

function validateButton(evt) {
    //Entenda o prevent default
    evt.preventDefault();
    checkDateFormat(startDateEmployment.value);

}

buttomSubmit.addEventListener("click", validateButton);

function checkDateFormat(dataRecebida) {

    var dataAux = dataRecebida.split("/");
    var ano = parseInt(dataAux[2]);
    var mes = parseInt(dataAux[1]);
    var dia = parseInt(dataAux[0]);

    var ano = dataAux[2];
    var mes = dataAux[1];
    var dia = dataAux[0];

    if ((ano == null) || (mes == null) || (dia == null)) {
        return alert(resultDate.innerText = false + ' Data inválida!!');
    }
    if (this.eNumeroValido(ano) && this.eNumeroValido(mes) && this.eNumeroValido(dia)) {
        if (ano > 0) {
            if ((mes <= 0) || (mes > 12)) {
                return alert(resultDate.innerText = false + ' Número mês menor que 1 ou maior que 12 inválido!');
            }
            if ((dia > 31) || (dia <= 0)) {
                return alert(resultDate.innerText = false + ' Número dia maior que 31 ou menor que 1 inválido!');
            }
            if ((dia >= 30) && (mes == 2)) {
                return alert(resultDate.innerText = false + ' Número dia 30 ou maior para fevereiro inválido!');
            }
            if ((dia == 29) && (mes == 2) && ((ano % 4) != 0)) {
                return alert(resultDate.innerText = false + ' Número dia 29 para fevereiro não bissexto inválido!');
            }
            if ((dia == 31) && ((mes == 2) || (mes == 4) || (mes == 6) || (mes == 9) || (mes == 11))) {

                return alert(resultDate.innerText = false + ' Número dia 31 para mês inválido!');
            }
            if ((1 <= mes <= 12) && (1 <= dia <= 31)) {

                return alert(resultDate.innerText = true + ' Data Validada!' + dia + '/' + mes + '/' + ano);
            }
        }
        else {
            return alert(resultDate.innerText = false + ' Ano negativo. Invalidado!');
        }
    }
    else {

        return alert(resultDate.innerText = false + ' Dados não numéricos. Invalidado!');
    }

    return alert(resultDate.innerText = false + " Data Inválida!!");
}


function eNumeroValido(valor) {
    return alert(resultDate.innerText = !isNaN(valor) && isFinite(valor));
    return alert(resultDate.innerText = (typeof valor === "number"));
}



