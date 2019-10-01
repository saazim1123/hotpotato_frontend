import React from 'react'
import API_ROOT from '../adaptors/api'
import API from '../adaptors/api'

export default class Login extends React.Component {

    state = {
        error: false,
        fields:{
            username: '',
            password: ''
        }
    }


    login = (username, password) => {
        fetch(`${API_ROOT}auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
            body: JSON.stringify({username, password})
        }).then(res => res.json())
        .then(res => {
            localStorage.setItem('token', res.id)
        })
    }
    

//     //make a login function

//     login = (username, password) => {
//         fetch(`${API_ROOT}auth`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: localStorage.getItem('token')
//             },
//             body: JSON.stringify({username, password})
//         }).then(res => res.json())
//         .then(res => {
//             localStorage.setItem('token', res.id)
//         })
//     }

    handleChange = e => {
        const newFields = {...this.state.fields, [e.target.name]: e.target.value}
        this.setState({fields: newFields})
    }

 
    handleSubmit = e => {
      e.preventDefault();
      const user = this.state.fields.username
      this.login(user, this.state.fields.password)
      this.props.history.push('/dashboard')
      this.props.toggleUser() 
      this.props.updateUser(user)
    //   API.login(user)
    //   this.login(this.state.fields.username, this.state.fields.password)
      this.props.history.push('/play')
    }


    render (){
        const {fields} = this.state
        return (
            <div> 
                {/* <h1> This is the Login Page </h1> */}
            <div className="ui form">
            
            <form className={ "login-form" } onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
                />
            </div>
             <div className="ui field">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
                </div>
                <button type="submit" className="ui basic green button" >Submit</button>
            </form>
            </div>        
        </div>     
    )}

    // render (){
    //     const {fields} = this.state
    //     return (
    //         <div> 
    //             {/* <h1> This is the Login Page </h1> */}
    //         <div className="ui form">
            
    //         <form className={ "login-form" } onSubmit={this.handleSubmit}>
    //         <div className="ui field">
    //           <label>Username</label>
    //           <input
    //             name="username"
    //             placeholder="username"
    //             value={fields.username}
    //             onChange={this.handleChange}
    //             />
    //         </div>
    //          <div className="ui field">
    //             <label>Password</label>
    //             <input
    //               name="password"
    //               type="password"
    //               placeholder="password"
    //               value={fields.password}
    //               onChange={this.handleChange}
    //             />
    //             </div>
    //             <button type="submit" className="ui basic green button" >Submit</button>
    //         </form>
    //         </div>        
    //     </div>     
    // )}
}




// NEW 




  


// edit form to take in correct format of dob
