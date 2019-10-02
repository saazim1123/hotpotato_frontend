import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import NavBar from './components/NavBar'
import GameContainer from './containers/GameContainer'
import GameOver from './components/GameOver'
import {Route, Switch} from 'react-router-dom'


class App extends Component {

  state = {
    showNavbar: false,
    userLogged: false,
    currentUser: ""
  }

  toggleNavbar = () => {
      this.setState({ showNavbar: !this.state.showNavbar })
  }

  toggleUser = () => {
    this.setState({ userLogged: !this.state.userLogged })
  }

  updateUser = (user) => {
    this.setState({ currentUser: user })
  }

  logOut = () => {
    this.toggleUser()
    this.setState({ currentUser: "" })
  }



  render(){
    const { showNavbar, userLogged } = this.state
    const { toggleNavbar, toggleUser, updateUser, logOut } = this
    return (
      <div>
          <div>
            <NavBar showNavbar={showNavbar} toggleNavbar={toggleNavbar} userLogged={userLogged} logOut={logOut}/>
            <button className="navButton" onClick={toggleNavbar}>{ showNavbar ? 'CLOSE' : 'OPEN' }</button>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={ props => { return (<Login {...props} toggleUser={toggleUser} updateUser={updateUser}/>)}}/>
            <Route path="/signup" component={ props => { return (<SignUp {...props} toggleUser={toggleUser} updateUser={updateUser}/>)}}/>
            <Route path="/play" component={GameContainer}/>
            <Route path="/gameover" component={ props => { return (<GameOver {...props}/>)}}/>
          </Switch>
      </div>
    )
  }
}


export default App;
