setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);
/** A observação é a seguinte: as etapas 1, 2 e 3 são executadas sequencialmente de forma sincrona 
 *  porém a ultima etapa  que é a Compra parafuso, Adicionar ao estoque será executado 2 milissegundos 
 *  após aperta o play para a execução do código simulando uma tarefa assincrona
 */
console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro