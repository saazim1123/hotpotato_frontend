import URL_ROOT from '../URL'

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};


export function login (username, password) {
 return dispatch => {
 fetch(`${URL_ROOT}auth`, {
   method: 'POST',
   headers: headers,
   body: JSON.stringify({ username, password })
 }).then(res => res.json())
   .then(res => {
     localStorage.setItem('token', res.id)
     dispatch({type: "LOGIN", user: res})
   })
 }
}
