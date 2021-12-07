import React, { Component } from 'react';
import imgLoading from './assets/img/load.gif';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from './TodoList';
import './App.css';

export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
        }
        this.handleState = this.handleState.bind(this);
    }

    handleState() {
        this.setState({
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state;

        // irá chamar a função depois de 2 segundos
        setTimeout(this.handleState, 3000)

        if (redirect) {
            return (
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={TodoList} />
                        </Switch>
                    </BrowserRouter>
                </div>
            );
        }

        return (
            <div className="container-loading-main">
                <span><img src={imgLoading} alt="Imagem Carregamento Loading" className="container-img"/> </span>
            </div>
        )
    }
}
