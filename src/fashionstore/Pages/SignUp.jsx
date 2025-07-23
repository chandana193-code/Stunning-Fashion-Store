import React from 'react'
import Header from '../Components/Header'
import '../Styling/SignUp.css';
import {Link} from 'react-router-dom';
const SignUp = () => {
  return (
    <body>
    <div className="signUp-container">
      <Header/>
          <div className="signUp-form">
              <h2>Register</h2>
              <p>Please fill in the fields below</p>
              <form action="#">
                <div className="input-field1">
 
                  <input type='text1' placeholder='First name' required/>

                </div>
                <div className='input-field1'>
                   <input type='text1' placeholder='Last name'required/>
                </div>
                <div className='input-field1'>
                  <input type='password' className='password' placeholder='Enter your password' required/>
                  <i class="fa-light fa-lock"></i>
                </div>
                      <div className='input-field1'>
                        <input type='text1' placeholder='Enter your email' required />
                      </div>
                  <div className='input-field1 button'>
                   <input type='button' value="Create Account"/>
                  </div>
              </form>

            <div className='backToLogin'>
              <span className="text1"> Already have an account?
                  <Link to="/loginForm" className="text2">Login</Link>
              </span>
            </div>

          </div>
      
    </div>
    </body>
  )
}

export default SignUp
