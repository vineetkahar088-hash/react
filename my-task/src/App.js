import React, { useEffect, useState } from 'react'

import MainContainer from './components/MainContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import ProductContext from './components/ProductContext'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  const [data, setData] = useState([])
    const [cart, setCart] = useState([])


  useEffect(() => {
    async function callAPi(url) {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }
    callAPi('https://fakestoreapi.com/products')
  }, [])

  return (
     <ProductContext.Provider value={{ data, cart, setCart }}>
      <Router>
        <Navbar/>
   
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/cart" element={<Cart/>} />
           <Route path="/Login" element={<Login/>} />
                 <Route path="/Signup" element={<Signup/>} />
       

          
        </Routes>
            
      </Router>
    </ProductContext.Provider>
  )
}

export default App
