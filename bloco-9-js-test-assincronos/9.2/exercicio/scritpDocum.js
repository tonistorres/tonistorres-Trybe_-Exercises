// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
//********************************************************************************* */
//Referências:
//https://pt.stackoverflow.com/questions/175304/o-que-s%C3%A3o-m%C3%A9todos-async
//https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar
// *********************************************************************************
// async - utilizamos em métodos que irá executar uma chamada assíncrona 
// bastante utilizado para fazer requisição a uma API.
// Esse método ao ser invocado não precisa esperar por sua execução, ele 
// não é um método bloqueante ou seja a aplicação não sofrerá travamento,
// uma vez que ele seja bem aplicado e feito os devidos tratamentos de 
// exceptions. Assim que o método assíncrono termina ele volta para o 
// ponto em que foi chamado e dar continuidade no seu ponto de execução,
//  Isso é feito com a palavra-chave await.
//********************************************************************************* */
//

const fetchJoke = async () => {

    //AULA AO VIVO(Aula 9.2 - Tribo 16 -B): Apartir de 35:07  
    // Ao invocar o método fetch e passar para ele uma URl de uma requisição 
    // o retorno ou a resposta que eu espero é uma promessa (Promisse)
    const promisse = fetch('API_URL');
};

window.onload = () => fetchJoke();