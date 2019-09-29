import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

class App extends Component {

  render(){
    return (
      <div>
          <div>
            <h1>Server is Working</h1>
            {/* <Navbar></Navbar> */}
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
