import React, {Component} from "react";
import '../components/ListaFotter.css';
import PropTypes from 'prop-types';

class ListaFotter extends Component {
render() {
    return <li id={this.props.id} className="style-list-fotter">{this.props.assunto}</li>
}
}

ListaFotter.propTypes = {
    id: PropTypes.string,
    assunto: PropTypes.string,
  };
  
export default ListaFotter;