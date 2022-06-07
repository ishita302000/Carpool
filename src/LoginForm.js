import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { InitialList, errors } from "./AccountList";
import SignIn from "./SignForm";
import {useHistory} from 'react-router-dom';


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
      
        // const history = useHistory();
        // const navigateTo = () => history.push('/RiderOffer');
       
     
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
        let userData = InitialList.find(user => user.email == this.state.email & userData.password !== this.state.password );
        console.log(InitialList);
        
  
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
        //   <div className="form-content-right">
        //   <form className="form" >
        //     <h1>Create your account</h1>
        //     <div className="form-inputs">
        //        <label htmlFor="email" className="form-label">
        //         Email
        //        </label>
        //        <input  id="Email "type="email" name="email" className="form-input" placeholder='Enter your email' value={email_}
        //        onChange={handleChange} 
        //        />
        //     </div>     
    
        //     <div className="form-inputs">
        //        <label htmlFor="password" className="form-label">
        //          Password
        //        </label>
        //        <input id="password" type="password" name="password" className="form-input" placeholder='Enter your password' value1={password_}
        //        onChange={handleChange_} />         
        //     </div> 
        //    <button className='form-input-btn' type='button' onClick={handleAdd}> Sign up</button> 
        //    <span className='form-input-login'>
        //      Already have an account ? <NavLink exact activeClassName="active" to="/LoginForm">LogIn</NavLink> 
        //    </span>
        //   </form>
        // </div> 
          //////
          <div className="form-content-right">
            <form className="form" onSubmit={this.handleSubmit}>
            <h1>LogIn your account</h1>

            <div className="form-inputs">
               <label htmlFor="email" className="form-label">
                Email
               </label>
               <input  type="email" name="email" className="form-input" placeholder='Enter your email' value={this.state.email}
               onChange={this.handleInputChange} 
               />
            </div>   

              {/* <label>
                Email 
                <input
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </label> */}

              <div className="form-inputs">
                <label htmlFor="password" className="form-label">
                  Password
               </label>
               <input id="password" type="password" name="password" className="form-input" placeholder='Enter your password' value={this.state.password}
                onChange={this.handleInputChange} />         
             </div> 

              {/* <label>
                Password
                <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </label> */}

              { <button  className='form-input-btn' type="submit" >Log in</button> }
            </form>
          </div>
        );
      }
    }

export default Login;