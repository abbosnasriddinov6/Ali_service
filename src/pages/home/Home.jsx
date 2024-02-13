import React from 'react'
import './Home.scss'
import { logo, logoali, logocha } from '../../assets'
import { NavLink } from 'react-router-dom'
import Platformsweworkwith from './Platformsweworkwith'
import Footer from '../../components/Footer'
import Login from './Login'
const Home = () => {
    return (
        <>
            <div className='full'>
                <div className="container">
                    <div className='head'>
                        <div className='Header'>
                            <div className='Logo'>
                                <img src={logocha} alt="" />
                            </div>
                            <div className='navbar'>
                                <ul>
                                    <NavLink to='/'><li>Home</li></NavLink>
                                    <NavLink to='contactus'><li>Contact Us</li></NavLink>
                                    <NavLink to='aboutus'><li>About Us</li></NavLink>
                                    <NavLink to='register'><li>Register</li></NavLink>
                                </ul>
                            </div>
                        </div>
                        <div className='text'>
                            <div className='texts'>
                                <h1>Making Life Easier for Truck Drivers</h1>
                                <p>The trucking industry is changing and drivers need <br /> technology and high-quality  service that help them <br /> adjust. We have got a great solution for that!</p>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Platformsweworkwith />
            <Login />
            <Footer />
        </>
    )
}

export default Home