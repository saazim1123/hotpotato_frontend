import React from 'react'
import API from '../adaptors/api'
import QuestionCard from '../components/QuestionCard'

class GameContainer extends React.Component {
    
    state = {
        questions: []
    }

    getQuestions = () => {
        API.getQuestions().then(questions => this.setState({ questions }))
    }

    componentDidMount() {
        this.getQuestions()
    }

    render() {
        const { questions } = this.state
        return questions.map(question => 
            <QuestionCard question={question}/>
        )
    }
}

export default GameContainer