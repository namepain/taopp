import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './routes/home/index'
import User from './routes/user/user';
import Detail from './routes/detail/detail'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/user" exact component={User}/>
          <Route path="/detail" exact component={Detail}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
