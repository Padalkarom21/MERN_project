import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import{} from 'react-router-dom'
import Footer from '../../../projec2/src/component/Footer'
import PersonIcon from '@mui/icons-material/Person';
import{ToastContainer,toast} from 'react-toastify'
import './Login.css'
const Register= () => {
const [name,setname]=useState("");
const [email,setemaill]=useState("");
const [password,setpassword]=useState("");
const [confirmpassword,setconfirmpassword]=useState("");
const [phone,setphone]=useState("");
//form function
const handleSubmit=(e)=>{
    e.preventDefault()
    toast.success('Register successfully');
    console.log(name,email,password,confirmpassword,phone)
}
  return (
   <>
   <div className="forms">
   <div className="wrappers">
        <div className="form-wrapper sign-in">
<form action="" onSubmit={handleSubmit}>

    <h2>Register</h2>
    <div className="input-group">
        <input type="text" required  name="" onChange={(e)=>setname(e.target.value)}  value={name}/>
        <label><i className="fa-solid fa-user"></i>&nbsp;Name</label>
    </div>
    <div className="input-group">
        <input type="password" required  name="" onChange={(e)=>setpassword(e.target.value)} value={password}/>
        <label><i className="fa-solid fa-key"></i>&nbsp;Password</label>
    </div>
    <div className="input-group">
        <input type="password" required  name="" onChange={(e)=>setconfirmpassword(e.target.value)} value={confirmpassword}/>
        <label><i className="fa-solid fa-key"></i>&nbsp; Conform Password</label>
    </div>
    <div className="input-group">
        <input type="email" required  name="" onChange={(e)=>setemaill(e.target.value)} value={email}/>
        <label><i className="fa-solid fa-key"></i>&nbsp;Email</label>
    </div>
    <div className="input-group">
        <input type="number" required  name=""  onChange={(e)=>setphone(e.target.value)} value={phone}/>
        <label><i className="fa-solid fa-key"></i>&nbsp;Phone</label>
    </div>
    
<button type="submit"><NavLink to='/nav'>Login</NavLink></button>
<div className="signup-link">
    <p>Already have an account ? <NavLink to='/log'>Login</NavLink></p>
</div>

</form>
         
       </div>
    </div>
  
    </div>
   </>
  )
}

export default Register
