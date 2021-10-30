import React,{Component} from "react";
import '../components/Fotter.css';
import ListaFotter from "./ListaFotter";

class FotterCustom extends Component{
render(){
    const Assuntos = ['Criar componentes React', 'Usar props', 'Compor componentes', 'Criar Múltiplos Componentes', 'Utilizar Conceito PropTypes','Lista Dinâmica','CSS Flex-Box'];

    return (
    <footer>
        <section className="App-style-fotter-custom">
    {    Assuntos.map((item,index) => 
            <ListaFotter id={index} assunto={item}/>
        )}
        </section>
    </footer>
   );
}
}


export default FotterCustom;