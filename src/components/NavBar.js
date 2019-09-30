import React from 'react'

class NavBar extends React.Component {

    render() { 
        return <div className={`overlay ${this.props.showNavbar ? 'active' : ''}`}>
        <button onClick={this.props.toggleNavbar} className="closebtn">&times;</button>
            <nav className="overlay-content">
            <h1><a href={"/"}> Home </a></h1>
            <h1><a href={"/login"}>| Log In |</a></h1>
            <h1><a href={"/signup"}>| Sign Up |</a></h1>
            <h1><a href={"/highscore"}>| High Scores |</a></h1>
            </nav>
        </div>
    }
        
}

export default NavBar