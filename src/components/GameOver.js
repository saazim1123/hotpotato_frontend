import React from 'react'
import API from '../adaptors/api'

class GameOver extends React.Component  {
    
    state = {
        users: []
    }

    componentDidMount() {
        API.getSortedByRankedUsers().then(users => this.setState({ users }))
    }

    render() {
    const { highScore } = this.props.history.location
    const { users } = this.state
    return <div>
        <h1 className={"game-over"}>GAME OVER</h1>
        <h1 className={"game-over"}>You scored: {highScore}</h1>
        <div><h2>{users.username}</h2></div>
        </div>
    }
}

export default GameOver