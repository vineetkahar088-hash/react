import React, { useContext } from 'react'
import ProductContext from './ProductContext'
import '../components/Cart.css'




const Cart = () => {
  const { cart } = useContext(ProductContext)

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty </p>
      ) : (
        cart.map((item, index) => (
          <div className="parent" key={index}>
            <div className="parent-img">
            <img  src={item.image} alt={item.title} />
            </div>
            
            <div className='parent-2'>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
