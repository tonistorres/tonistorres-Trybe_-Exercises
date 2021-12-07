import React, { Component } from 'react'
import ValidEmail from './ ValidEmail';
import './App.css';
import ImagemPerfil from './assets/img/perfilLinkedin.jpeg';
import FotterCustom from './components/Fotter';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      listaToDo: [],
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.removeList = this.removeList.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // https://stackoverflow.com/questions/26505064/what-is-the-best-way-to-add-a-value-to-an-array-in-state
  handleAddToDo() {
    const { email } = this.state;

    if (email !== "") {
      this.setState((previousState) => ({
        listaToDo: [...previousState.listaToDo, email],
        email: ''
      }));
    }
  }

  removeList(index) {
    const { listaToDo } = this.state;
    const tarefas = listaToDo.slice();
    tarefas.splice(index, 1);

    this.setState({
      listaToDo: tarefas,
    })
  }


  render() {
    const { email, listaToDo } = this.state;
    return (
      <div className="container-main">
        
        <header className="container-cabecalho">
          <div className="container-navegacao">
            <input id="btn-back" type="button" value="Voltar" className="btn" />
            <img className="imgPerfil" src= {ImagemPerfil } alt="Imagem do Perfil"/>
            <h1> ToDo List </h1>
          </div>
        </header>
       
        <div className="container-secundario">
          <label htmlFor="id-email">
            Email:
            <input
              id="id-email"
              type="email"
              name="email"
              value={email}
              onChange={this.onInputChange}
            />
          </label>
          <input
            id="btn-send"
            type="button"
            data-testid="id-add"
            value="Add +"
            onClick={this.handleAddToDo}
          />
        </div>
        
        <section className="container-lista-componente">
       
          <section className="container-recebe-lista">
            {listaToDo.map((itemList, index) => (
              <div className="container-dentro-map" >

                {/* <h2 key={index}> {itemList} </h2> */}
                <ValidEmail chave={index} email={itemList} funcaoRemove={this.removeList} />


              </div>
            ))}
          </section>
          
        </section>
        <div className="container-lista-testes-rtl">
          <h4>Lista de Testes RTL Implementados na Aplicação</h4>
          <ul>
            <li> ☑️ TELA LOGIN - Verificar se no componente Loading renderiza o atributo da img alt="Imagem Carregamento Loading"</li>
            <li> ☑️ ToDo List - Verificando se o elementos ToDo List esta sendo renderizado na tela</li>
            <li> ☑️ Verificar se o campo de email está renderizando na tela</li>
            <li >☑️ Verificando se um button renderizando na tela</li>
            <li> ☑️ Verificar se um elemento do tipo button com value voltar esta sendo renderizado na tela</li>
            <li> ☑️ Verificar se o elemento inputEmail é do tipo email</li>
            <li> ☑️ Verificarse o elemento Add + é do tipo button</li>
            <li> ☑️ Verificando a propriedade value do button Add + </li>
            <li> ☑️ Verificar se existe DOIS BUTTONS  no componente React </li>
            <li> ☑️ Teste o Comportamento de Digitar no inputEmail, Clicar no Botão Add +, Email renderiza na tela </li>
            <li> ☑️ TESTANDO COMPONENTE VALIDA EMAIL, caso o email seja válido. </li>
          </ul>
        </div>
              <FotterCustom />
      </div>
    )
  }
}
