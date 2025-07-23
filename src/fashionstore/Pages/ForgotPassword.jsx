import React from 'react'
import Header from '../Components/Header'
import '../Styling/ForgotPassword.css';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
 return (


    <div className="container1">
          <Header/>
      <div className="forms">
        <div className="form1">
            <span class="title">Recover password</span>
             <p>Please enter your e-mail:</p>
            <form action="#">
                <div className="input-field">
              
                    <input type="text" placeholder="Enter your email" required />
                   
                </div>

                <div className="input-field button">
                    <input type="button" value="Recover" />
                </div>
            </form>

            <div className="login-signup">
                <span class="text">Remember your password?
                    <Link to="/loginForm" className="text">Back to login</Link>
                    
                </span>
            </div>
           </div>
          </div>
         
      
    </div>

 
  )
}

export default ForgotPassword;