import React from 'react'
import { Link } from "react-router-dom";

class NavBar extends React.Component {

    render() { 
        return <div className={`overlay ${this.props.showNavbar ? 'active' : ''}`}>
        <button onClick={this.props.toggleNavbar} className="closebtn">&times;</button>
            <nav className="overlay-content">
            <h1><Link to={"/"}> Home </Link></h1>
            <h1><Link to={"/login"}>| Log In |</Link></h1>
            <h1><Link to={"/signup"}>| Sign Up |</Link></h1>
            <h1><Link to={"/highscore"}>| High Scores |</Link></h1>
            </nav>
        </div>
    }
        
}

export default NavBar