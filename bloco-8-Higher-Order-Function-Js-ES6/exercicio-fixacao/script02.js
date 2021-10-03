// craindo uma arrow function passando como parametro um numero representado por 
// number e uma ação representada por action 
const repeat = (number, action) => {
    // craindo um laço de repetição for que itera de um em um até a condição 
    // passada em number satisfazer a condicional do laço de repetição 
    for (let count = 0; count <= number; count += 1) {
    // utilizamos action()-> que recebe count como parametro 
        action(count);
    }
  };
  
  // Invocamos a constante repeat e passamos 3 como parâmetro de number 
  // e em action passamos um arrow function que tem por finalidade receber
  // um number e filtrar os numeros pares
   
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });

