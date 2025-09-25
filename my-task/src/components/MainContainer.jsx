import React, { useContext } from 'react'
import SingleCard from './SingleCard'
import ProductContext from './ProductContext'
import '../components/MainContainer.css'


const MainContainer = () => {
  const { data } = useContext(ProductContext)

  return (
    <div className="main-container">
      {data.map((item, index) => (
          <SingleCard key={index} product={item} />
        ))}
    </div>
  )
}

export default MainContainer
