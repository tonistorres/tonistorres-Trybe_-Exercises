const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);// isEven(count) ou isOdd(count)
    }
  };
  // criamos uma constante que recebe uma arrow function 
  // que tem por regra de negócio receber um parâmetro do tipo number(integer)
  // e verifica se o numero passado é par, caso seja, imprime na tela
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  // criamos uma constante que recebe uma arrow function 
  // que tem por regra de negócio receber um parâmetro do tipo number(integer)
  // e verifica se o numero passado é ímpar, caso seja, imprime na tela
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;