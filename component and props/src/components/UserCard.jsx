import React from 'react'
import vineet from '../assets/vineet image.jpg'
import "./UserCard.css"
const usercard = () => {
  return (
    <div className='user-container'>
        <p id='user-name'>vineet</p>
       <img id='user-img' src={vineet} alt='vineet'></img>
       <p id='user-desc'>description in react</p>
     </div>
  )
}

export default usercard