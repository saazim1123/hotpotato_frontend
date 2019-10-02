import React from 'react'

const QuestionCard = (props) => {

    let { question } = props
    

    const answerCheck = (answer) => {
        const { question, increaseCurrentScore, resetScore, nextQuestion, highestScore } = props
        if (answer === question.correct_answer) {
            increaseCurrentScore()
            nextQuestion()
            console.log("Correct!")
        } else {
            const highScore = highestScore
            console.log("Wrong!")
            resetScore()
            props.history.push({
                pathname: "/gameover",
                highScore: highScore
              })
        }
    }

    if (question === undefined) return <h1>No question found.</h1>
        
    return (<div className={"question-card"}>
            <h1 className={"question"}>{question.text}</h1>
            <button className={"answer-btn"} onClick={() => answerCheck(question.first_choice)}>{question.first_choice}</button>
            <button className={"answer-btn"} onClick={() => answerCheck(question.second_choice)}>{question.second_choice}</button>
            <button className={"answer-btn"} onClick={() => answerCheck(question.third_choice)}>{question.third_choice}</button>
           </div>
           )
}

export default QuestionCard