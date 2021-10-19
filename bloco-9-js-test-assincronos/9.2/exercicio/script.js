// Agora vamos tentar fazer as requisições a API usando fetch .
// Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Um objeto contendo as especificações da requisição. 
// Para essa API , atribuiremos a esse objeto as chaves method e headers

// apiScript.js     
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    //***************************************************************************************************** */
    // Documentação:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    // AULA AO VIVO(Aula 9.2 - Tribo 16 -B): Apartir de 35:07  
    // * Quando você tem um tem uma Promisse você tem três estados a ser esperados: 
    // pendente: estado inicial, nem cumprido nem rejeitado.
    // cumprido: significa que a operação foi concluída com sucesso. Utilizamos o método then se tudo ocorreu bem
    // rejeitado: significa que a operação falhou. Utilizamos o método de captura de erro catch
    //*************************************************************************************************** */
    fetch(API_URL, myObject) // nesse ponto recebemos como resposta uma promisse RESPOSTA BRUTA COM TODOS OS DADOS 
                            //  AULA AO VIVO 9.2 Tribo -B Apartir de 42min
        .then(response => response.json()) // Então quando eu receber o resultado positiovo irei usar o método
        // json() e extrair de DENTRO DA RESPOSTA BRUTA ou seja do arquivo com json mais outras informações adicionais somente o json que é o que queremos trabalhar no javaScript. Daí recebemos uma outra promessa de tudo que acabei de falar rsrsrs então sim recebemos uma outra promessa kkk     
        .then(data => console.log(data)); // aqui eu tenho a promessa de que irei receber os dados já polido ou 
                                          // seja, o arquivo json lindo maravilhoso para eu fazer daqui pra frente
                                          // a brincadeira que eu quiser srs

};

window.onload = () => fetchJoke();

// O segundo parâmetro myObject define o tipo de request: method:
// 'GET' e o formato da resposta headers: { 'Accept': 'application/json' } , 
// como visto nas requisições via curl .

window.onload = () => fetchJoke();