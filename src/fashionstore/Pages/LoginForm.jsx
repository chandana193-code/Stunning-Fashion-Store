

import React from 'react'
import Header from '../Components/Header';

import '../Styling/Login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="container">
      <Header/> 
      <div className="forms">
        <div className="form login">
            <span class="title">Login</span>

            <form action="#">
                <div className="input-field">
              
                    <input type="text" placeholder="Enter your email" required />
                   
                </div>
                <div className="input-field">
                    <input type="password" className="password" placeholder="Enter your password" required />
                    <i class="fa-light fa-lock"></i>
                   

                </div>

                <div className="checkbox-text">
                    <div className="checkbox-content">
                        <input type="checkbox" id="logCheck" />
                        <label htmlFor="logCheck" className="text">Remember me</label>
                    </div>
                    
                 <Link to="/forgotPassword" className="textStyling">Forgot password?</Link>
                </div>

                <div className="input-field button">
                    <input type="button" value="Login" />
                </div>
            </form>

            <div className="login-signup">
                <span class="text">Not a member?
                    <Link to="/signUp" className="textStyling">Signup Now</Link>
                    
                </span>

                           <p>By continuing, you agree to stunning fashion store Terms & Conditions and Privacy Policy</p>

            </div>
           </div>
           </div>
         
      
    </div>

  )
}

export default LoginForm;