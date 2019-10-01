import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import NavBar from './components/NavBar'
import GameContainer from './containers/GameContainer'
import {Route, Switch} from 'react-router-dom'


class App extends Component {

  state = {
    showNavbar: false,
    userLogged: false
  }


  componentDidMount () {

  }

  toggleNavbar = () => {
      this.setState({ showNavbar: !this.state.showNavbar })
  }

  toggleUser = () => {
    this.setState({ userLogged: !this.state.userLogged })
}

  render(){
    const { showNavbar, userLogged } = this.state
    const { toggleNavbar, toggleUser } = this
    return (
      <div>
          <div>
            <NavBar showNavbar={showNavbar} toggleNavbar={toggleNavbar} userLogged={userLogged} />
            <button className="navButton" onClick={toggleNavbar}>{ showNavbar ? 'CLOSE' : 'OPEN' }</button>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} toggleUser={toggleUser}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/play" component={GameContainer}/>
          </Switch>
      </div>
    )
  }
}


export default App;
