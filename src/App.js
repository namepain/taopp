import './common/css/normalize.css'
import './common/css/slick.min.css'
import './common/css/slick-theme.min.css'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './routes/home/index'
import User from './routes/user/user';
import Detail from './routes/detail/detail'
import Seat from './routes/seat/seat'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/taopp/" exact component={Home}/>
          <Route path="/taopp/user" exact component={User}/>
          <Route path="/taopp/detail" exact component={Detail}/>
          <Route path="/taopp/seat" exact component={Seat}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
