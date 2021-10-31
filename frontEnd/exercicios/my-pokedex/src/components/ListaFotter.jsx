import React, {Component} from "react";
import '../css/ListaFotter.css';
import PropTypes from 'prop-types';

class ListaFotter extends Component {
render() {
    return <li id={this.props.id} className="style-list-fotter">{this.props.assunto}</li>
}
}

ListaFotter.propTypes = {
    id: PropTypes.number.isRequired,
    assunto: PropTypes.string.isRequired,
};

ListaFotter.defaultPropos={
    id:'Undefined id Required',
    assunto:'Undefined Assunto do Requisito',
}
 
export default ListaFotter;