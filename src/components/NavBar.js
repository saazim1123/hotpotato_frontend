import React from 'react'
import { Link } from "react-router-dom";

class NavBar extends React.Component {

    render() { 
        const { toggleNavbar, showNavbar, userLogged} = this.props
        return <div className={`overlay ${showNavbar ? 'active' : ''}`}>
        <button onClick={toggleNavbar} className="closebtn">&times;</button>
            <nav className="overlay-content">
            <h1 onClick={toggleNavbar}><Link to={"/"}> Home </Link></h1>
            {userLogged ? <h1 onClick={localStorage.clear()} ><Link to={"/"}>| Log Out |</Link></h1> : <h1 onClick={toggleNavbar}><Link to={"/login"}>| Log In |</Link></h1>}
            {userLogged ? null : <h1 onClick={toggleNavbar}><Link to={"/signup"}>| Sign Up |</Link></h1>}
            <h1 onClick={toggleNavbar}><Link to={"/highscore"}>| High Scores |</Link></h1>
            </nav>
        </div>
    }
        
}

export default NavBar