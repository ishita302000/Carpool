import React, { Component } from "react";
import { InitialList, errors } from "./AccountList";
import SignIn from "./SignForm";


class Login extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          email: "",   //" "
          password: "",
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
     
    }
      handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
          [target.name]: target.value,
        });
      }

    
      handleSubmit(event) {
        event.preventDefault();

     //   var {uemail , pass } = document.forms[0];
        let userData = InitialList.find(user => user.email == this.state.email);
        console.log(InitialList);
   // map required ?
   
        if(userData)
        {
            if(userData.password !== this.state.password)
            {
               // setErrorMessage({ name:"pass" , message: errors.pass});
            }
            
        }
        else {
            // Username not found
           // setErrorMessages({ name: "uname", message: errors.uemail });
          }

      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Email 
                <input
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </label>
              <button type="submit">Log in</button>
            </form>
          </div>
        );
      }
    }

export default Login;