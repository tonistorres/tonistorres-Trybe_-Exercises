// craindo uma arrow function passando como parametro um numero representado por 
// number e uma ação representada por action 
const repeat = (number, action) => {
    // craindo um laço de repetição for que itera de um em um até a condição 
    // passada em number satisfazer a condicional do laço de repetição 
    for (let count = 0; count <= number; count += 1) {
      // utilizamos action()-> que recebe console.log e passamos nela 
      // index que em nosso caso é chamado de cout  
      action(count);
    }
  };
  // fazemos a chamada da constante repeat que recebeu em sua estrutura  
  // a arrow function acima descrita
  repeat(5, console.log);