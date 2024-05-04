import React from 'react'
import "./style.css"
import { game, laptop, logo, retro, webLogo } from '../../assets'

const HomePage = () => {
    return (
        <>
            <section>
                <div className="home-wrapper">
                    <nav>
                        <a href="#" className="logo">
                            <img src={logo} alt="logo" />
                        </a>

                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">New</a>
                            </li>
                            <li>
                                <a href="#">Popular</a>
                            </li>
                            <li>
                                <a href="#">Trending</a>
                            </li>
                            <li>
                                <a href="#">Categories</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section>
                <div id="header" className="home-wrapper">
                    <div className='heading'>
                        <img src={webLogo} alt="web-logo" />
                        <div className='heading-content'>
                            <h1>The Bright future of web 3.0</h1>
                            <div  className='content-wrapper'>
                                <p>We dive into the next evolution of the web that slaims to put the power of the platforms back into the hands of the people. But is it really fulfiling its promise?</p>
                                <button className="blue-btn">Read more</button>
                            </div>
                        </div>
                    </div>

                    <div className="new">
                        <h2 style={{color: "#e6a558"}}>New</h2>

                        <div className="aside">
                            <h4>Hydrogen VS Electric Cars</h4>
                            <p>Will hygrogen-fueled cars ever catch up to EVs? </p>
                            </div>

                        <hr />
                        <div className="aside">
                            <h4 style={{color: "#e6a558"}}> The Downsides of AI Artistry</h4>
                            <p>What are the possible adverse effects of on-demand AI image generation?</p>
                        </div>

                        <hr/>

                        <div className="aside">
                            <h4>Is VC Funding Drying Up?</h4>
                            <p>Private funding by VC firms is down 50% YOY. We take a look at what thar means</p>
                        </div>

                    </div>

                </div>
            </section>

            <section>
                <div className="home-wrapper">
                    <div className='third-section'>
                        <div className='third-section-inner'>
                            <img src={retro} alt="retro" />
                            <div className='third-section-inner-content'>
                                <h4 style={{color: "#c6c5cb", fontSize: "22px", fontWeight: "700", margin: "3px 0px"}}>01</h4>
                                <a href="#">Reviving Retro PCs</a>
                                <p>What happens when old PCs are given modern upgrades?</p>
                            </div>
                        </div>
                        <div className='third-section-inner'>
                            <img src={laptop} alt="laptop" />
                            <div className='third-section-inner-content'>
                                <h4 style={{color: "#c6c5cb", fontSize: "22px", fontWeight: "700",  margin: "3px 0px"}}>02</h4>
                                <a href="#">Reviving Retro PCs</a>
                                <p>What happens when old PCs are given modern upgrades?</p>
                            </div>
                        </div>
                        <div className='third-section-inner'>
                            <img src={game} alt="game" />
                            <div className='third-section-inner-content'>
                                <h4 style={{color: "#c6c5cb",fontSize: "22px", fontWeight: "700",  margin: "3px 0px"}}>03</h4>
                                <a href="#">Reviving Retro PCs</a>
                                <p>What happens when old PCs are given modern upgrades?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage