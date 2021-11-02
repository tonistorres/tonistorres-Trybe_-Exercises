import React,{Component} from "react";
import DataRequisitos from "../DataRequisitos";
import ListaFotter from "./ListaFotter";
import '../css/Fotter.css';

class FotterCustom extends Component{
render(){
   return (
    <footer>
        <section className="App-style-fotter-custom">
            <h1>Requisitos:</h1>
            {DataRequisitos.Results.map((item,index) => 
            <ListaFotter id={index} assunto={item.title}/>
            )}
        </section>
    </footer>);
   }
}

export default FotterCustom;