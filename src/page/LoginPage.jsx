// import { FcGoogle } from "react-icons/fc";
// import { Link } from 'react-router-dom';


// const LoginPage = () => {
//     return (
//         <div className="login-page">
//             <div className="wrapper">
//                 <form action="">
//                 <h1>Selamat Datang!</h1>
//                 <div className="input-box">
//                     <input type="text" placeholder="Email Anda" required />
//                 </div>
//                 <div className="input-box">
//                     <input type="password" placeholder="Masukan Sandi" required />
//                 </div>
//                 <div className="remember-forgot">
//                     <a href="/sandi" className="signup-link">Lupa Sandi?</a>
//                     <a href="/daftar" className="signup-link">Daftar</a>
//                 </div>
//                 <Link to="/"><button type="submit">
//                     <a href="">Masuk</a>
//                 </button></Link>
                
//                 <div className="line">
//                     <span className="text-wrapper">atau</span>
//                 </div>
//                 <div className="overlap">
//                     <FcGoogle className="icon" />
//                     <div className="text-wrapper-2">Masuk dengan google</div>
//                 </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default LoginPage;


import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8084/api/login', { email, password })
            .then(response => {
                console.log(response.data);
                if(response.data.success) {
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