import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './Loading';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Loading} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

