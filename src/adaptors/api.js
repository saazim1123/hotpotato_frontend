import React from 'react'
import URL_ROOT from '../URL'

const questions = `${URL_ROOT}/questions`

const Questions = () => {
    return fetch(questions)
        .then(resp => resp.json())
        .catch(error => alert(error.message))
}

export default { Questions }