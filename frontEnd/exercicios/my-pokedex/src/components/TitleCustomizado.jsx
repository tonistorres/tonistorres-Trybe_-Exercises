import React,{Component} from "react";
import PropTypes from 'prop-types';
import '../css/TitleCustom.css';

class TitleCustom extends Component{
    render(){
        return <div className="style-title-custom" >{this.props.title}</div>
    }
}

TitleCustom.propTypes = {
    title: PropTypes.string.isRequired,
};

TitleCustom.defaultPropos={
    title:'Undefined title',
}

export default TitleCustom;