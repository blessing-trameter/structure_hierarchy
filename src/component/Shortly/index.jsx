import React from 'react'
import "./style.css"
import { branded, customized, detailed, facebook, instragram, pinterest, shortly, shortlyHero, twitter } from '../../assets'

const Shortly = () => {
    return (
        <>
            <div className='shortly-wrapper'>
                <div className='shortly-container'>
                    <a className='logo'>
                        <img src={shortly} alt="" />
                    </a>
                    <ul>
                        <li>
                            <a href="#">Freatures</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Resorces</a>
                        </li>
                    </ul>
                    <div className='log-in'>
                        <a>Login</a>
                        <a className='sign-up'>sign up</a>
                    </div>
                </div>

                <header>
                    <div>
                        <h1>More than just shorter links</h1>
                        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                        <button className='get-started'>Get started</button>
                    </div>
                    <div>
                        <img src={shortlyHero} alt="shortly" />
                        </div>
                </header>

                <div className="bg-blue">  
                <input type="text" />
                <div className='search'>Search</div>
                </div>

                <div className='advanced'>
                <h3>Advanced Statics</h3>
                <p>Track how your links are performing across the web with <br/> our advanced statistics dashboard.</p>
            </div>

            <div className="card">
                <div>
                    <img src={branded} alt="branded" />
                    <h5>Brand Recognition</h5>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>

                <hr/>
                <div>
                    <img src={detailed} alt="detailed" />
                    <h5>Detailed Records</h5>
                    <p>Gain insights into who is clicking your links knowing when and where people engage with your content helps inform better decisions</p>
                </div>
                <hr/>
                <div>
                    <img src={customized} alt="customized" />
                    <h5>Fully Customize</h5>
                    <p>Improve brand awareness and content discoverability through cutomizable links, supercharging audience awareness.</p>
                </div>
            </div>

            <div className="bg-blue-btn">
                <h3>Boost your links today</h3>
                <button className='get-started'>Get Started</button>
            </div>

            <footer>
                <a className='logo'>
                    <p>Shortly</p>
                    </a>
                    
                <div>
                    <h4>Features</h4>
                    <ul>
                        <li>
                            <a href="#">Link Shortening</a>
                        </li>
                        <li>
                            <a href="#">Branched Links</a>
                        </li>
                        <li>
                            <a href="#">Analytics</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Developers</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Out Team</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        {/* <li>
                            <a href="#">Contact</a>
                        </li> */}
                    </ul>
                </div>
                    <img src={facebook} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={instragram} alt="" />
                    <img src={twitter} alt="" />
                
            </footer>

            </div>
        </>
    )
}

export default Shortly