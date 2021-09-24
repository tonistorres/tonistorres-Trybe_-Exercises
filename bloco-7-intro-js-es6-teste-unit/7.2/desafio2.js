// Desenvolva uma função que receba um [array de objetos com cidades e estados] e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [{
        city: 'Belo Horizonte',
        state: 'Minas Gerais',
    },
    {
        city: 'Salvador',
        state: 'Bahia',
    },
    {
        city: 'Porto Alegre',
        state: 'Rio Grande do Sul',
    },
    {
        city: 'Manaus',
        state: 'Amazonas',
    }
]

// Resultado esperado
//['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']

//criando função com parametro que receberá o array de objetos 
function buildCitiesArray(arrayObject) {
    
    //criando uma array que receberá os valores extraídos do array de objejtos citiesAndStates
    arrayCyteState = [];

    //laço de repetição for que irá iterar o array de objeto recebido por parâmentro da fun
    for (let i = 0; i < arrayObject.length; i += 1) {
        arrayCyteState.push(`${ arrayObject[i].city} - ${arrayObject[i].state}`);
    }
    return arrayCyteState;
}

//chamada da função passando o Array de objetos 
console.log(buildCitiesArray(citiesAndStates));