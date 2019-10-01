import React from 'react'

const QuestionCard = (props) => {
    const { question } = props

    return <div className={"question-card"}>
            <h1>{question.text}</h1>
        </div>
}

export default QuestionCard