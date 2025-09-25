import React from 'react'
import '../components/Login.css'

const Signup = () => {
  return (
    <div className="main-container">
    <div className='Login-parent'>
         <form action="#">
     <div className="login-child">
        <h3>Create an account</h3>
        <h4>Enter Your details below</h4>
        <label htmlFor="name"></label>
        <input className='text' type="email"
         placeholder='Name' />
         <label htmlFor="email" ></label>
        <input className='email' type="password" placeholder='Email or PhoneNumber' />
                 <label htmlFor="password" ></label>
        <input className='password' type="password" placeholder='Password' />
        <button className='create-account'>Create Account</button>
      <button className='create-account'>Sign up with Google</button>
      
     </div>
</form>
        
    </div>
    </div>
  )
}

export default Signup