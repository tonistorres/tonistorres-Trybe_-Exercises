import React from 'react';

// aqui temos uma classe que extende ou adquire caracteristicas 
// de Component React 
class App extends React.Component {
  
  // temos aqui o método construtuor que foi instanciado 
  // e será acrescido ou sobrescrito com parte da nossa lógica
  // inicial, ou seja, configuraçẽos do estado inicial da aplicação
  constructor() {
    super();

// aqui é o localstorage do estado inicial srs
// nossas variavies e lógicas necessárias para 
// configuramos o estado inicial da aplicação 
// ficará no state o que pelo prórprio nome pare 
// meio óbvio.
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

    // a velha gambis do js bem inicialmente sabemos que o js não foi feito 
    // para trabalhar com classe, porém, a sua usabilidade e aceitação 
    // foi tão grande e deu tão certo que a linguagem tá em constate atualização.
    // Bem aqui está uma forma de fazer com que o this seja enxergado nas minhas
    // funções abaixo descrita.
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  // cada uma das funções abaixo estão envolta numa outra função
  // que herdamos no momento que invocamos React.Component que é 
  // a setState onde a mesma deixa clara o que deve ocorre no momento
  // que for invocada fazendo com que o react rederize de forma automatica sua lógica
  // Observação: Ambas recebem um objeto que logo em seguida e desconstruido e trabalhado 
  // como uma propriedade de um objeto.
  handleButtonOne() {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }));
  }
  
  handleButtonTwo() {
    this.setState(({ clicksBtnTwo }) => ({
      clicksBtnTwo: clicksBtnTwo + 1,
    }));
  }
  
  handleButtonThree() {
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }));
  }

  // Para essa função, não precisamos utilizar o bind porque ela é utilizada
  // apenas dentro do contexto do componente App
  getButtonColor(num) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    // bem para trabalha com cada propriedade separa desconstruimos 
    // O objeto state e pegamos as propriedae que irão no interessar 
    // para ser utilizadas dentro da função render 
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    
    return (
      <div>
        <button
          onClick={ this.handleButtonOne }
          // Para renderizarmos as cores, precisamos acrescentar a função
          // que contém a nossa lógica ao "inline style", passando o estado
          // correspondente como parâmetro
          style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
        >
          Botão 1 | Count = { clicksBtnOne }
        </button>
        <button
          onClick={ this.handleButtonTwo }
          style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >
          Botão 2 | Count = { clicksBtnTwo }
        </button>
        <button
          onClick={ this.handleButtonThree }
          style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
        >
          Botão 3 | Count = { clicksBtnThree }
        </button>
      </div>
    );
  }
}

export default App;