import React,{Component} from "react";
import { About } from "./About";
import {Route} from 'react-router-dom'
class Home extends Component{
render(){
    return(
        <div>
        <h1>Minha Home Page</h1>
        <Route path="/about" component={About} />
        </div>
    );
}
}

export default Home;