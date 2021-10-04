/**1 - Crie uma função que retorne a string 'Acordando!!' ; */
const strReturn = () => 'Acordando!!';

/**Crie outra função que retorne a string 'Bora tomar café!!' ; */
const strReturn2 = () => 'Bora tomar café!!';

/**Crie mais uma função que retorne a string 'Partiu dormir!!' ; */
const strReturn3 = () => 'Partiu dormir!!';

/** Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo: */

const doingThings= (funcao) => funcao();

// Ao chamar a função doingThings:
//doingThings(wakeUp);

console.log(doingThings(strReturn2));
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!