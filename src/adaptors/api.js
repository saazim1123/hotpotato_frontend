import React from 'react'
import URL_ROOT from '../URL'

<<<<<<< HEAD
const questions = `${URL_ROOT}/questions`

const Questions = () => {
    return fetch(questions)
        .then(resp => resp.json())
        .catch(error => alert(error.message))
}

export default { Questions }
=======
const API_ROOT = `http://localhost:3000/api/v1`
const token = localStorage.getItem('token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
  };
  
  const updateUser = (user) => {
    fetch(`${API_ROOT}/users/${user.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(user)
    }).then(res => {res.json()})
  }
  
  const getCurrentUser = (username, password) => {
    return fetch(`${API_ROOT}/current_user`, {
      headers: headers,
    }).then(res => res.json());
  
  };

 
  
  export default {
    auth: {
      getCurrentUser
    },
    user: {
      updateUser
    }
  };
  
>>>>>>> 78ecfaf98fd26762e00c2a35e84eca3b85c0f1c6
