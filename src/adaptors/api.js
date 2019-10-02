const API_ROOT = 'http://localhost:3000/api/v1'
const API_USER_ROOT = `${API_ROOT}/users`
const API_LOGIN_URL = `${API_ROOT}/login`
const API_VALIDATE_URL = `${API_ROOT}/validate`
const API_QUESTIONS = `${API_ROOT}/questions`

//  export default class API {
  
 const getQuestions = () => {
    return fetch(API_QUESTIONS)
        .then(resp => resp.json())
        .catch(error => alert(error.message))
  }

// }
  
  const constructHeaders = (moreHeaders = {}) => ({
    Authorization: localStorage.getItem("token"),
    ...moreHeaders
  });



 const createUser = user => {
    return fetch(API_USER_ROOT, {
      method: 'POST',
      headers: {'content-type':'application/json','accept':'application/json'},
      body: JSON.stringify({user})
    })
    .then(resp => resp.json())
  }

  const jsonify = res => {
    if (res.ok) return res.json();
    else throw res.json();
  };

  const handleServerError = response => {
    throw response;
  };

  const saveToken = data => {
    localStorage.setItem("token", data.token);
    return data.user;
  };

  const login = user =>
  fetch(API_LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then((resp) => resp.json())
    .then(data => saveToken(data))
    // .catch(data => handleServerError);

  const validateUser = () => {
      if (!localStorage.getItem("token"))
        return Promise.resolve({ error: "no token" });
    
      return fetch(API_VALIDATE_URL, {
        headers: constructHeaders()
      })
        .then(jsonify)
        .then(saveToken)
        .catch(handleServerError);
  };

const clearToken = () => localStorage.removeItem("token");
export default {
  getQuestions,
  createUser,
  login,
  validateUser,
  clearToken
};
  

   
 
  
  
// 
