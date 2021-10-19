// Agora vamos tentar fazer as requisições a API usando fetch .
// Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Um objeto contendo as especificações da requisição. 
// Para essa API , atribuiremos a esse objeto as chaves method e headers
function append(data) {
    // const ul recebe a referência de ul que está embutido no index.html desse exemplo
    const divMain = document.querySelector('#container-main');
    // as const(s) abaixo representa a(s) tag(s) li(s) que será(ão) embutida(s) em algum(ns) elemento(s) do index.html 
    //const liGeneric = document.createElement('li');
    // const liNome = document.createElement('li');
    // criar duas divs que comportará as tags li(s)
    const divId = document.createElement('div');
    const divNome = document.createElement('div');
    const divContainer = document.createElement('div');
    divContainer.className = 'container-ul';
    divId.className = 'container-id';
    divNome.className='container-name';

    // nesse ponto iremos setar as divs criadas o dado do elemento html criado 
    divId.innerHTML = data.id;
    divNome.innerHTML = data.joke;
    // li será filha da divID
    divContainer.appendChild(divId);
    // li será filha da divNome
    divContainer.appendChild(divNome);
    // todas serão filhas de ul
    divMain.appendChild(divContainer);
}


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
        .then(JSONdata => {
            console.log(JSONdata);
            // Bem para ficar mais facil para o método que irei trabalhar eu vou querer acessar 
            // no meu objeto json dois dados e enviar esses dados para meu append() que irá receber 
            // um objeto e irá colocar esse dados no DOM 
            // Então vamos lá criar um objeto aqui
            const piadaDoDia = {
                id: JSONdata.id,
                joke: JSONdata.joke
            }
            //AULA AO VIVO Tribo B - 54min 
            append(piadaDoDia);

        }); // aqui eu tenho a promessa de que irei receber os dados já polido ou 
    // seja, o arquivo json lindo maravilhoso para eu fazer daqui pra frente
    // a brincadeira que eu quiser srs

};

// O segundo parâmetro myObject define o tipo de request: method:
// 'GET' e o formato da resposta headers: { 'Accept': 'application/json' } , 
// como visto nas requisições via curl .

// Função recebe o nome do pokemon por parametro 
// retorna uma promessa e depois pega a resposta da promessa 
// e tenta extrair do json bruto o json polido somente o json puro pra trabalhar 
// e retorna outra promessa para esste trabalho 
// Logo temos aqui uma função que tá mais pra politico do que pra solução 
// Só devolve promessa tomará que cumpra porque diferente da vida real onde  os politicos 
// lava a égua aqui eu quebro ela é no catch se ela não me respeitar srs
function fetchPokemonData(pokemonName){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json());
  }
  


window.onload = () => fetchJoke();