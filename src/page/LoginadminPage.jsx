import React from 'react'
import gambarlogin from '../dist/img/logo.png'

const LoginadminPage = () => {
    return (
        <div className="login-page-admin">
            <div className="wrapper-admin">
                <div className='gambar-admin'>
                    <img src={gambarlogin} alt="gambarlogin" className="gambarlogin" />
                </div>
                <form action="">
                <div className="input-box-admin">
                    <label htmlFor="Username">Username</label>
                    <input type="text" id="username" required />
                </div>
                <div className="input-box-admin">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">
                    <a href="">Login</a>
                </button>
                </form>
            </div>
        </div>
    )
}

export default LoginadminPage