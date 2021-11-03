import React from 'react';

class App extends React.Component {
// Bem aqui temos o método construtor a classe
// no momento que for renderizado meu componente 
// o primerio método que será executado é o constructor
// que no caso estamos sobrescrevendo. Daí um bom lugar 
// para ficar armazenado os valores iniciais do componente
// o que chamos estado inicial. Se o primeiro bloco de código
// a ser executado antes da renderização inicializar o estado 
// no construtor é um tanto quanto obvio.
  constructor() {

    super();
    // Aqui eu considero um gambis do js para fazer referência do this 
    // nas funções criadas para mudnça de estado. Bem fazendo essa conexão
    // garante que o this será enxergado dentro das minhas funções onde ocorrerão 
    // a mudança de estado rs 
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
    
    // Estado inicial da aplição como ficará minhas variáveis 
    // em seu estado inicial
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

  }
    handleButtonOne() {
    
    // a forma correta de fazermos a alterção do nosso estado inicial 
    // é por meio da função setState que herdamos no momento que extendemos 
    // a React.Component
    this.setState((prevState) => ({
        clicksBtnOne: prevState.clicksBtnOne + 1,
      }));
    }
    
    handleButtonTwo() {
      this.setState((prevState) => ({
        clicksBtnTwo: prevState.clicksBtnTwo + 1,
      }));
    }
    
    handleButtonThree() {
      // A única coisa diferente é a desconstrução.
      // Apenas um método diferente de fazer a mesma coisa
      // do que foi feito nas funções anteriores.
      this.setState(({ clicksBtnThree }) => ({
        clicksBtnThree: clicksBtnThree + 1,
      }));
    }
 
   render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>Botão 1 | Count = {this.state.clicksBtnOne}</button>
            <button onClick={ this.handleButtonTwo }>Botão 2 | Count = {this.state.clicksBtnTwo}</button>
            <button onClick={ this.handleButtonThree }>Botão 3 | Count = {this.state.clicksBtnThree}</button>
      </div>
    );
  }
}

export default App;