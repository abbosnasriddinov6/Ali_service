import React from 'react'
import { clock, logocha } from '../../assets'
import { NavLink } from 'react-router-dom'
import './AboutUs.scss'
const AboutUss = () => {
    return (
        <div className='abouttruck'>
            <div className="container">
                <div className='Header2'>
                    <div className='llogoo'>
                        <img src={logocha} alt="" />
                    </div>
                    <div className='navbarr'>
                        <ul>
                            <NavLink to='/'><li>Home</li></NavLink>
                            <NavLink to='/contactus'><li>Contact Us</li></NavLink>
                            <NavLink to='/aboutus'><li>About Us</li></NavLink>
                            <NavLink to='/register'><li>Register</li></NavLink>
                        </ul>
                    </div>
                </div>
                <div className="aboutuss">
                    <div className='Us'>
                        <div className='works'>
                            <h1>1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum veritatis harum beatae reprehenderit fugit.</p>
                            <img src={logocha} alt="" />
                        </div>
                        <div className='works'>
                            <h1>2</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum veritatis harum beatae reprehenderit fugit.</p>
                            <img src={logocha} alt="" />
                        </div>
                        <div className='works'>
                            <h1>3</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum veritatis harum beatae reprehenderit fugit.</p>
                            <img src={logocha} alt="" />
                        </div>
                        <div className='works'>
                            <h1>4</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum veritatis harum beatae reprehenderit fugit.</p>
                            <img src={logocha} alt="" />
                        </div>
                        <div className='works'>
                            <h1>5</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum veritatis harum beatae reprehenderit fugit.</p>
                            <img src={logocha} alt="" />
                        </div>
                    </div>
                    <div className='way'>
                        <NavLink to='/register'><button>Apply</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUss