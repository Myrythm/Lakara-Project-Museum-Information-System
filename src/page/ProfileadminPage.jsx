import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileimg from '../dist/img/profile.png';

const ProfileadminPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            axios.post('http://localhost:8084/api/profile', { email: storedEmail })
                .then(response => {
                    if (response.data.success) {
                        setUsername(response.data.user.username);
                        setEmail(response.data.user.email);
                    } else {
                        console.error('User not found');
                    }
                })
                .catch(error => {
                    console.error('There was an error fetching the profile data!', error);
                });
        }
    }, []);

    return (
        <div className="profile">
            <div className="wrapper-profile">
                <form action="">
                    <h1>Akun</h1>
                    <div className="profile-img">
                        <img src={profileimg} alt="Profile" />
                    </div>
                    <div className="input-box-profile">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box-profile">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileadminPage