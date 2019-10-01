const API_ROOT = 'http://localhost:3000/api/v1'
const API_USER_ROOT = `${API_ROOT}/users`
const API_LOGIN_URL = `${API_ROOT}/login`
const API_VALIDATE_URL = `${API_ROOT}/validate`
const API_QUESTIONS = `${API_ROOT}/questions`

export default class API {
  
  static getQuestions = () => {
    return fetch(API_QUESTIONS)
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

  static login = user => {
    return fetch(API_LOGIN_URL, {
      
    })
  }

  static jsonify = res => {

    if (res.ok) return res.json();
    else throw res.json();
  };

   static handleServerError = response => {
    throw response;
  };

  static saveToken = data => {
    localStorage.setItem("token", data.token);
    return data.user;
  };

 
  
  
}
