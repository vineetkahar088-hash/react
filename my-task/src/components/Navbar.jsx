import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from './ProductContext'
import '../components/Navbar.css'

const Navbar = () => {
  const { cart } = useContext(ProductContext)

  return (
    <nav className="navbar">
      <div className="navbar-child">
      <div className="left-part">
        <Link to="/" className="logo">MyShop</Link>
       </div>
        <div className='right-part'>
          <Link className='comman'to="/">Home</Link>
             <Link  className='comman' to="#">About Us</Link>
             <Link   className='comman'to="#">Services</Link>
    
                <Link  className='comman' to="/cart">Cart ({cart.length})</Link>

                  <Link   className='comman'to="/Login">Login</Link>
                  <Link   className='comman'to="/Signup">SignUp</Link>
      
        </div>
        </div>
      
    </nav>
  )
}

export default Navbar
