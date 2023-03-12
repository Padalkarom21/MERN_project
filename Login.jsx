import React from 'react'
import './Login.css';

import {NavLink}from 'react-router-dom';
const Login = () => {
  return (
   <>
 
   <div className="mainsbox">
   <div className="wrappers">
        <div className="form-wrapper sign-in">
<form action="">
    <h2>Login</h2>
    <div className="input-group">
        <input type="text" required />
        <label><i className="fa-solid fa-user"></i>&nbsp;Username</label>
    </div>
    <div className="input-group">
        <input type="password" required />
        <label><i className="fa-solid fa-key"></i>&nbsp;Password</label>
    </div>
    
<button type="submit"><NavLink to='/nav'>Login</NavLink></button>
<div className="signup-link">
    <p>Dont have an account ?<NavLink to='/reg'>sign up</NavLink></p>
</div>

</form>
       </div>
                    
    </div>
      
    </div>





   </>
  )
}

export default Login
