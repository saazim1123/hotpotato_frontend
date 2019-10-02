import React from 'react'
import API from '../adaptors/api'
import QuestionCard from '../components/QuestionCard'

class GameContainer extends React.Component {
    
    state = {
        questions: [[]],
        currentQuestionNumber: 0,
        currentScore: 0,
        highestScore: 0
    }


    getQuestions = () => {
        API.getQuestions().then(questions => this.setState({ questions }))
    }

    componentDidMount() {
        if(localStorage.getItem('token')) {this.getQuestions()
        }else{
            this.props.history.push("/login")
        }
        
    }

    nextQuestion = () => {
        this.setState({ currentQuestionNumber: this.state.currentQuestionNumber + 1 })
    }

    increaseCurrentScore = () => {
        this.setState({ currentScore: this.state.currentScore + 1 })
        this.setHighestScore()
    }

    resetScore = () => {
        this.setState({ currentScore: 0 })
    }

    setHighestScore = (currentScore) => {
        if (currentScore > this.state.highestScore) {
            this.setState( { highestScore: currentScore } ) 
        } else {
            return
        }
    }

    randomColors = ['black', 'red', 'blue', 'purple', 'teal', 'aqua', 'grey', 'coral']

    render() {
        const { questions, currentQuestionNumber, currentScore, highestScore } = this.state
        const { nextQuestion, increaseCurrentScore, resetScore, setHighestScore } = this
        return <div>
                <h1 className={"current-streak"}>Your current streak:</h1><h1 className={"current-score"} style={ {color: `${this.randomColors[Math.floor(Math.random() * this.randomColors.length)]}`}  }>{currentScore}</h1>
        <QuestionCard question={questions[currentQuestionNumber]} nextQuestion={nextQuestion} increaseCurrentScore={increaseCurrentScore} resetScore={resetScore} setHighestScore={setHighestScore} currentScore={currentScore}/>
                <h1 className={"highest-score"}>Your Highest Score: {highestScore}</h1>
               </div>
    }
}

export default GameContainer