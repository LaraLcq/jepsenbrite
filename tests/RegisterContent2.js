import React, { Component } from 'react';
import Axios from 'axios';


export default class RegisterContent extends Component {
    constructor(props) {
        super(props);
        this.handleChangeName=this.handleChangeName.bind(this)
        this.handleChangeEmail=this.handleChangeEmail.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
           name: '',
           email:'',
           password:''
         }
    }
   handleChangeName  (event) {
     this.setState({ name: event.target.value });
   }
   handleChangeEmail  (event) {
     this.setState({ email: event.target.value });
   }
   handleChangePassword (event) {
     this.setState({ password: event.target.value });
   }

   handleSubmit (event)  {
     event.preventDefault();
     const user = {
       name: this.state.name,
       email:this.state.email,
       password:this.state.password,
     };
     Axios.post(`/api/register`, { user })
       .then(res => {
         console.log(res);
         console.log(res.data);
       })
   }
  render() {
      return(
          <div className="eventsPassed">
                <div className='passedEvents'>
                    <h1>Register</h1>
                          <form className='createForm'  onSubmit={this.handleSubmit}>
                              <div className="form-group">
                                  <label htmlFor="psd">Pseudo</label>
                                  <input type="text" className="form-control" id="psd" placeholder="Enter pseudo" defaultValue={this.state.name} onChange={this.handleChangeName} />
                              </div>
                              <div className="form-group">
                                  <label  htmlFor="pswd">Password</label>
                                  <input type="password" className="form-control" id="pswd"  placeholder='Enter password' defaultValue={this.state.password} onChange={this.handleChangePassword}/>
                                  <label  htmlFor="email">Email address</label>
                                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" defaultValue={this.state.email} onChange={this.handleChangeEmail}/>
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                      </div>
                  </div>
          );
      }
}
