import URL_ROOT from '../URL'

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorizatidon: token
};



