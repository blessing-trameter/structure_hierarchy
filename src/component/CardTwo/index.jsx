import React from 'react'
import "./style.css"

// Structure Breakdown
{/* <div>
    <h1></h1>
    <div>
        <input type="text" />
        <input type="text" />
        <button></button>
    </div>
</div> */}

const CardTwo = () => {
  return (
    <div className='card-two'>
        <h1>Customer Login</h1>
        <div className='container'>
            <div className='input-box'>
            <input type="text" placeholder='Username'/>
            <i class="fa fa-user person" aria-hidden="true"></i>
            </div>

            <div className='middle-border'></div>

            <div className='input-box'>
            <input type="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'/>
            <i class="fa fa-unlock-alt password" aria-hidden="true"></i>
            </div>
        </div>

        <button>
            LOGIN
        </button>
    </div>
  )
}

export default CardTwo