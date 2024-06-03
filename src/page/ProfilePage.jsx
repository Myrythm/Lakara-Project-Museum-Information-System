import React from 'react'
import profileimg from '../dist/img/admin.png'

const ProfilePage = () => {
    return (
        <div className="profile">
            <div className="wrapper-profile">   
                <form action="">
                    <h1>Akun</h1>
                    <div className="profile-img">
                        <img src={profileimg} alt="Profile" />
                    </div>
                    <div className="input-box-profile">
                        <label htmlFor="Username">Username</label>
                        <input type="text" id="username" required />
                    </div>
                    <div className="input-box-profile">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit">
                        <a href="">Simpan</a>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProfilePage