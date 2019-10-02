import React from 'react'
import API_ROOT from '../adaptors/api'

export default class Login extends React.Component {

    state = {
        error: false,
        fields:{
            username: '',
            password: ''
        }
    }


    login = (username, password) => {
        let data = null
        fetch(`http://localhost:3000/api/v1/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        }).then(res => res.json())
        .then(res => localStorage.setItem('token', res.token))
    }


    handleChange = e => {
        const newFields = {...this.state.fields, [e.target.name]: e.target.value}
        this.setState({fields: newFields})
    }

 
    handleSubmit = e => {
      e.preventDefault();
      const user = this.state.fields.username
      this.login(this.state.fields.username, this.state.fields.password)
      this.props.toggleUser() 
      this.props.updateUser(user)
      this.props.history.push('/play')
    }


    render (){
        return (
            <div> 
            <div className="ui form">
            
            <form className={ "login-form" } onSubmit={(e) => this.handleSubmit(e)}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
                />
            </div>
             <div className="ui field">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                </div>
                <button type="submit" className="ui basic green button" >Submit</button>
            </form>
            </div>        
        </div>     
      )}

  
}