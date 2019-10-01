const API_ROOT = 'http://localhost:3000/api/v1'
const API_USER_ROOT = 'http://localhost:3000/api/v1/users'

export default class API {
  static createUser = user => {
    return fetch(API_USER_ROOT, {
      method: 'POST',
      headers: {'content-type':'application/json','accept':'application/json'},
      body: JSON.stringify({user})
    })
    .then(resp => resp.json())
  }
}