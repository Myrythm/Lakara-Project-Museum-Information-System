import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8084/api/login', { email, password })
            .then(response => {
                console.log(response.data);
                if(response.data.success) {
                    onLogin();
                    navigate('/');
                } else {
                    alert('Login failed: ' + response.data.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="login-page">
            <div className="wrapper">
                <form onSubmit={handleLogin}>
                    <h1>Selamat Datang!</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Email Anda" required 
                            value={email} onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Masukan Sandi" required 
                            value={password} onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="remember-forgot">
                        <Link to="/sandi" className="signup-link">Lupa Sandi?</Link>
                        <Link to="/daftar" className="signup-link">Daftar</Link>
                    </div>
                    <button type="submit">
                        Masuk
                    </button>
                    <div className="line">
                        <span className="text-wrapper">atau</span>
                    </div>
                    <div className="overlap">
                        <FcGoogle className="icon" />
                        <div className="text-wrapper-2">Masuk dengan Google</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
