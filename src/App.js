import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import api from './adaptors/api'


class App extends Component {

  state = {
    showNavbar: false
  }


  componentDidMount () {
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(res => {
        // this.props.login(res).bind(this)
        
      });
    }
  }

  toggleNavbar = () => {
      this.setState({ showNavbar: !this.state.showNavbar })
  }

  render(){
    return (
      <div>
          <div>
            <h1 className={ "header" }>HOT POTATO!!!</h1>
            <NavBar showNavbar={this.state.showNavbar} toggleNavbar={this.toggleNavbar} />
            <button className="navButton" onClick={this.toggleNavbar}>{ this.state.showNavbar ? 'CLOSE' : 'OPEN' }</button>
            <BrowserRouter>
              <Switch>
                {/* <Route path="/" component={About}/> */}
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                
                {/* <Route path="/game" component={PlayGame}/>
                <Route path="/questions" component={Questions}/>
                <Route path="/logout"/> */}
              </Switch>
            </BrowserRouter>
          </div>
      </div>
    )
  }

}


export default App;
