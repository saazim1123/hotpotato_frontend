import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'

class App extends Component {

  render(){
    return (
      <div>
          <div>
            <h1>Server is Working</h1>
            {/* <Navbar></Navbar> */}
            <BrowserRouter>
              <Switch>
                <Route path="/login" component={Login}/>
              </Switch>
            </BrowserRouter>
          </div>
      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
