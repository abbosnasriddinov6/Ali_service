import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Register.scss'
import { logocha } from '../../assets'
import { NavLink } from 'react-router-dom'
const Register = () => {
  return (
    <>
      <div className='all'>
        <div className="container">
          <div className='Register'>
            <div className="card">
              <h2>Please fill the form</h2>
              <input type="text" placeholder='Name...' />
              <input type="number" placeholder='Number...' />
              <NavLink to='/' className='navlink'><button>Send</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register