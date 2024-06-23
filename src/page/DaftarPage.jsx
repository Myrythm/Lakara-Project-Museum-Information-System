// const DaftarPage = () => {
//     return (
//         <div className="login-page">
//             <div className="wrapper">
//                 <form action="">
//                     <h1>Halaman Daftar</h1>
//                     <div className="input-box">
//                         <input type="text" placeholder="Nama" required />
//                     </div>
//                     <div className="input-box">
//                         <input type="email" placeholder="Masukan email anda" required />
//                     </div>
//                     <div className="input-box">
//                         <input type="password" placeholder="Masukan kata sandi anda" required />
//                     </div>
//                     <div className="input-box">
//                         <input type="password" placeholder="Masukan ulang kata sandi" required />
//                     </div>
//                     <button type="submit"><a href="/login">Daftar</a></button>
//                     <div className="bergabung-link">
//                         <p>Sudah punya akun? <a href="/login">Bergabung</a></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default DaftarPage

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DaftarPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        axios.post('http://localhost:8084/api/register', { username, email, password })
            .then(response => {
                console.log(response.data);
                if (response.data.success) {
                    navigate('/login');
                } else {
                    alert('Registration failed: ' + response.data.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="login-page">
            <div className="wrapper">
                <form onSubmit={handleRegister}>
                    <h1>Halaman Daftar</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Nama" required 
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Masukan email anda" required 
                            value={email} onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="input-box">
                        <input type="password"  placeholder="Masukan kata sandi anda" required 
                            value={password} onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Masukan ulang kata sandi" required 
                            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit">Daftar</button>
                    <div className="bergabung-link">
                        <p>Sudah punya akun? <Link to="/login">Bergabung</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DaftarPage;