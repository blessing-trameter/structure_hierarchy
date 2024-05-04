import React from 'react'
import "./style.css"

const CardThree = () => {
  return (
    <div className='card-three'>
           <i class="fa-brands fa-joomla"></i>
            <h3>Resupply</h3>
<div className="wrapper">
           <input type="text" placeholder="Enter your username"/>
           <input type="password" placeholder="Enetr your password"/>
         
        <button className="login">Login</button>
        <a href="#">Forgot password?</a>
        </div>
        

    </div>
  )
}

export default CardThree