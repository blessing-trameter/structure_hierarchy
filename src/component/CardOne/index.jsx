import React from 'react'
import "./style.css"

// structure breakdown
{/* <div>
    <div>
        <section>
            <div>
            <h2></h2>
            <img src="" alt="" />
            <img src="" alt="" />
            </div> 
            <input type="text" />
            <input type="text" />
            <button></button>
            <div>
            <input type="text" />
            <a href=""></a>
            </div>
           
        </section>
        <section>
            <h2></h2>
            <p></p>
            <button></button>
        </section>
    </div>
</div> */}


const CardOne = () => {
    return (
        <div className='card-one'>
            <h1>Login #07</h1>
            <div className="container">
                <section className="left">
                    <div className='left-heading'>
                        <h2>Sign In</h2>
                        <div>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                        </div>
                        </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Username' />

                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' />

                    <button className="btn">Sign In</button>
                    <div className='checkbox'>
                        <input type="checkbox" /> Remember Me
                        <a href="#">Forget Password</a>
                    </div>
                </section>

                <section className="right">
                    <h2>Welcome to login</h2>
                    <p>Don't have an account?</p>
                    <button className="btn-small">Sign Up</button>
                </section>
            </div>
        </div>
    )
}

export default CardOne