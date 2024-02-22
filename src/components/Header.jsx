import React from 'react'
import { logocha } from '../assets'
import { NavLink } from 'react-router-dom'
// import './FooterandHeader.scss'
const Header = () => {
    return (
        <div className='Header1'>
            <div className='llogo'>
                <img src={logocha} alt="" />
            </div>
            <div className='navbar'>
                <ul>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/aboutus'><li>About Us</li></NavLink>
                    <NavLink to='/register'><li>Register</li></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header