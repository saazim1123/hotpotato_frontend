const API_ROOT = 'http://localhost:3000/api/v1'
const API_USER_ROOT = 'http://localhost:3000/api/v1/users'
const API_QUESTIONS = `${API_ROOT}/questions`

export default class API {
  
  static questions = () => {
    return fetch(questions)
        .then(resp => resp.json())
        .catch(error => alert(error.message))
  }
  
  static createUser = user => {
    return fetch(API_USER_ROOT, {
      method: 'POST',
      headers: {'content-type':'application/json','accept':'application/json'},
      body: JSON.stringify({user})
    })
    .then(resp => resp.json())
  }
}
