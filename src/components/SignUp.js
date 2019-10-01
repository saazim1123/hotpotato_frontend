import React from 'react'
import API_ROOT from '../adaptors/api'

export default class SignUp extends React.Component {
    
    state = {
        error: false,
        fields: {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }

    }

    //make a addUser function
    
   

   addUser = (user) => {
    fetch(`${API_ROOT}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      data: {},
      dataType: "JSON",
      body: JSON.stringify({ user })
    }).then(resp => resp.json())
  
  }

  

    handleChange = e => {
        const newFields = {...this.state.fields, [e.target.name]: e.target.value}
        this.setState({fields: newFields})
    }

    handleSubmit = e => {
        e.preventDefault()
        //debugger
        this.addUser(this.state.fields)
        //this.props.history.push('/dashboard')
        this.props.history.push('/dashboard')
        // Has to to push through to the highscore too
    }

    render (){
        
        const { fields } = this.state
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>

                        <label>Firstname: </label>
                        <input 
                            name="first_name"
                            type="text"
                            placeholder="Please enter your First Name"
                            value={fields.first_name}
                            onChange={this.handleChange}
                        />
                        <br></br><br></br>
                        <label>Lastname: </label>
                        <input 
                            name="last_name"
                            type="text"
                            placeholder="Please enter your Last Name"
                            value={fields.last_name}
                            onChange={this.handleChange}
                        />
                        <br></br><br></br>
                        <label>Username: </label>
                        <input 
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            value={fields.username}
                            onChange={this.handleChange}
                        />
                        <br></br><br></br>

                        <label>Email: </label>
                        <input 
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            value={fields.email}
                            onChange={this.handleChange}
                        />
                        <br></br><br></br>

                        <label>Password: </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Please enter a password"
                            value={fields.password}
                            onChange={this.handleChange}
                        />
                        <br></br><br></br>
                        <button type="submit">Sign Up!</button>
                    
                </form>
            </div>
        )
    }
}
















// this.props.history.push('/dashboard')