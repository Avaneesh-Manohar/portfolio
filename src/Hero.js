import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div className='hero'>
            <div className="hero1">
                <div className="info">
                    <h1 className="Hello">Hello I am</h1>
                    <h1 className="Name">Avaneesh <span> Manohar </span> </h1>
                    <h3>FRONTEND DEVELOPMENT</h3><br />
                    <a href='localhost:3000/portfolio' target="_blank"><button>See my works</button></a>
                </div>
                <div className="image">
                    <img src="https://ingeniouswebster.netlify.app/assets/imG/SERVICE.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
