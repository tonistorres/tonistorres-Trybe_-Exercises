import React, {Component} from "react";
import '../css/CardPokemon.css';
import PropTypes from 'prop-types';

class ListaCustomPokemon extends Component {
render() {
    return ( 
    <section id={this.props.id+1} className="style-main">
        <div className="style-main-interno">
            <span>{this.props.nome} </span>
            <span>{this.props.tipo}</span>
            <div className="style-peso-unidade">    
            <span>{this.props.pesoMedio}</span>
            <span>{this.props.unidade}</span>
            </div>
            <img className="style-main-interno-img" src={this.props.imagem} alt={this.props.nome} />
        </div>
    </section>)
}
}

ListaCustomPokemon.propTypes = {
    nome: PropTypes.string,
    tipo: PropTypes.string,
    pesoMedio: PropTypes.string,
    unidade: PropTypes.string,
    src: PropTypes.string,
  };

  ListaCustomPokemon.defaultPropos={
   nome:'Undefined nome',
   tipo:'Undefined tipo',
   pesoMedio: 'Undefined Peso',
   unidade:'Undefined Unidae',
   src:'Link img Undefined'
  }
  
export default ListaCustomPokemon;