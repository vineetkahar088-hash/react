import React, { useContext } from 'react'

import '../components/SingleCarrd.css'
import ProductContext from './ProductContext'

const SingleCard = ({ product }) => {
    const { cart,setCart} = useContext(ProductContext)

    function addToCart() {
    setCart([...cart, product])
  }
  return (
    <div className='parent-div'>
      <div className="part-1">
        <img src={product.image} alt="" />
      </div>
      <div className="part-2">
        <div className="btn-prent">
        <button onClick={addToCart} className='crd-btn'>Add to Cart</button>
        </div>
       <p> {product.title}</p>
       <p>$ {product.price}</p>
      </div>
    </div>
  )
}

export default SingleCard
