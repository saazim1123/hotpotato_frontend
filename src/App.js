import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {Route, Switch} from 'react-router-dom'

class App extends Component {

  state = {
    showNavbar: false
  }


  toggleNavbar = () => {
      this.setState({ showNavbar: !this.state.showNavbar })
  }

  render(){
    return (
      <div>
          <div>
            <NavBar showNavbar={this.state.showNavbar} toggleNavbar={this.toggleNavbar} />
            <button className="navButton" onClick={this.toggleNavbar}>{ this.state.showNavbar ? 'CLOSE' : 'OPEN' }</button>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>
      </div>
    )
  }

}


export default App;
