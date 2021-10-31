import React,{Component} from "react";
import DataPokemon from "../DataPokemon";
import CardPokemon from "./CardPokemon";
import '../css/Pokemon.css'

class Pokemon extends Component{
render(){
    return (
    <div className="style-main-pokemon-list">
       {DataPokemon.map((item, index)=><CardPokemon id={index} nome={item.name} tipo={item.type} pesoMedio={item.averageWeight.value} unidade={item.averageWeight.measurementUnit} imagem={item.image} />)}
    </div>
        )
    }
}

export default Pokemon;