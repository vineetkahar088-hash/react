import React from 'react'
import '../components/Login.css'

const Login = () => {
  return (
    <div className="main-container">
    <div className='Login-parent'>
         <form action="#">
     <div className="login-child">
        <h3>Login</h3>
        <label htmlFor="email"></label>
        <input className='Email' type="email"value={"Email"} />
         <label htmlFor="password" ></label>
        <input className='Password' type="password"value={"Password"} />
        <button className='create-account'>Login</button>
        <a href="#">DON'T HAVE AN ACCOUNT? REGISTER</a>
     </div>
</form>
        
    </div>
    </div>
  )
}

export default Login