import React, { Component } from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  const Task = (value,index) => {
    return (
        <div className="component-container-corpo">
        <ul key={index} className="component-corpo">
        <li> O conteúdo é: {value.conteudo} </li>
        <li> Status: {value.status} </li>
        <li> Bloco: {value.bloco} </li>
        </ul>
        </div>
    );
    }

class  Content extends Component{
    render(){
    const result = conteudos.map((item,index) => Task(item,index));
    return result;
   }
}

export default Content;