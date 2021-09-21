

/*******************************************************************/
//FONTE DE PESQUISA:
//https://www.youtube.com/watch?v=kUeb3E5oLac
//https://github.com/codelie/validaData/blob/master/validaData.js
//https://www.w3schools.com/jsref/jsref_isnan.asp
//Calendario:https://www.youtube.com/watch?v=aMKiTK7ATKg
//Validacao formularios:https://www.youtube.com/watch?v=cHpJ9f63XVw
//IMPLEMENTAÇÕES: TONIS TORRES
//************************************************************* */

window.onload = function () {
    generateStatesDynamically();
    validateForm();
}

function validateForm() {

    $("#cadastro-curriculo").validate({

        rules: {
            name: {
                required: true,
                maxlength: 40,
            },
            email: {
                required: true,
                email: true,
                maxlength: 50

            },
            uf: {
                required: true,
            },
            cpf: {
                required: true,
                cpfBR: true,
                maxlength: 14
            },
            endereco: {
                required: true,
                maxlength: 200

            },
            cidade: {
                required: true,
                maxlength: 28

            },
            resumo: {
                required: true,
                maxlength: 1000
            },
            cargo: {
                required: true,
                maxlength: 500
            }

        },
        //cadastro-curriculo
        submitHandler: function (form) {
            alert('Sucessooooooooooo')
        }
    })
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


//caledario no campo de texto
$("#dtinicio-emprego").datepicker()

function eNumeroValido(valor) {
    return alert(resultDate.innerText = !isNaN(valor) && isFinite(valor));
    return alert(resultDate.innerText = (typeof valor === "number"));
}



