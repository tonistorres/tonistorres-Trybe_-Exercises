
// Aqui temos uma constante entitulada como numberGenerator que recebe uma 
// arrow function que retorna 
const numberGenerator = () => {
    //retorna um valor em 0 e 99 
    return Math.random() * 100;
  }
  //fazemos a chamada da função
  console.log(numberGenerator());