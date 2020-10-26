import React, { Component } from 'react';
import './App.css';
import CreateGroup from './components/CreateGroup'
import SupprimerGroup from './components/SupprimerGroup'
import UpdateGroup from './components/UpdateGroup'
import Menu from './components/Menu'
import ListGroup from './components/ListGroup'
import {Switch,Route,BrowserRouter} from 'react-router-dom'

class App extends Component {
 

  render() {
      return (
        <BrowserRouter>
        <Menu/>
        <Switch>
          <Route  path="/ListGroup" component={ListGroup}/>
          <Route  path="/CreateGroup" component={CreateGroup}/>
          <Route  path="/SupprimerGroup" component={SupprimerGroup}/>
          <Route  path="/UpdateGroup/:id/:name/:address" component={UpdateGroup}/>
        </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;