import React from 'react'

const QuestionCard = (props) => {
    const { question, increaseCurrentScore, nextQuestion, resetScore, setHighestScore, currentScore } = props

    const answerCheck = (answer) => {
        if (answer === question.correct_answer) {
            increaseCurrentScore()
            setHighestScore(currentScore)
            nextQuestion()
            console.log("Correct!")
        } else {
            console.log("Wrong!")
            resetScore()
        }
    }

    return <div className={"question-card"}>
            <h1 className={"question"}>{question.text}</h1>
            <button className={"answer-btn"} onClick={() => answerCheck(question.first_choice)}>{question.first_choice}</button>
            <button className={"answer-btn"} onClick={() => answerCheck(question.second_choice)}>{question.second_choice}</button>
            <button className={"answer-btn"} onClick={() => answerCheck(question.third_choice)}>{question.third_choice}</button>
           </div>
}

export default QuestionCard