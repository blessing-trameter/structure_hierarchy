import React from 'react'
import "./style.css"

const CardFour = () => {
    return (
        <div className='card-four'>
            <h1>user Login</h1>
            <hr />
            <div className='user-login'>
                <div className='input-text'>
                    <i class="fa-regular fa-user"></i>
                    <input type="text" placeholder='username' />
                </div>
                <div className='input-text'>
                <i class="fa fa-unlock-alt password" aria-hidden="true"></i>
                    <input type="password" placeholder='password' />
                </div>
                <div className='input-text'>
                <i class="fa fa-sign-in" aria-hidden="true"></i>
                    <button className='btn-login'>login</button>
                </div>

                <a href="#"> Forgot password?</a>
            </div>
        </div>
    )
}

export default CardFour