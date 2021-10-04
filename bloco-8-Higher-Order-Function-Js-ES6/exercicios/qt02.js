/** Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o núm */


const check = (mynumber,number) => mynumber === number;

// criando uma constante que recebe como função um sorteio de premios
const prizeDraw = (mynumber,callback) => {
    // Retorna número inteiro aleatório de 1 a 5
    // Atribuímos esse resultado há uma constante returnResult
    const number = Math.floor(Math.random() * 5) + 1;
    // nesse ponto temos o retorno da callback(check) que está sendo invocada
    // passando mynumber=5 e const number(numero gerado automaticamente) 
    return callback(mynumber,number) ? 'Lucky day, you won!' : 'Try Again!';
}

//console.log(prizeDraw(5,check));