import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <div className="container">
                <div className='Login'>
                    <div className='textlar1'>
                        <h1>If you are an owner operator, company driver, or transportation company in the U.S and would like to receive high quality ELD support, then leave your details and we will contact you as soon as possible</h1>
                    </div>
                    <div className='urlside'>
                        <NavLink to='/register'><button>Register</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login