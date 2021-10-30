import React,{Component} from "react";
import '../components/Head.css';
import logo from "../img/logoTrybeTransp.png";

class HeadCustom extends Component{
render(){
    const { titleProject:{title}} = this.props
    return (
    <header className="App-style-head-custom">
        <nav className="App-style-nav">
            <div className="App-container-img">
                 <img className="App-logo-trybe" src={logo} alt="Logo" />
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            
        </nav>
   </header>
    );
}

}

export default HeadCustom;