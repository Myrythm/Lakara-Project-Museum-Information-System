import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import "./dist/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';
import HomePage from "./page/HomePage";
import LoginPage from './page/LoginPage';
import DaftarPage from './page/DaftarPage';
import SandiPage from './page/SandiPage';
import VerifikasiEmail from './page/VerifikasiEmail';
import BerandaPage from './page/BerandaPage';
import LoginadminPage from './page/LoginadminPage';
import UlasanPage from './page/UlasanPage';
import ProfilePage from './page/ProfilePage';
import NavBerandaComp from './components/NavBerandaComp';
import NavUlasanComp from './components/NavUlasanComp';
import Tambah from './page/Tambah';
import DetailPage from './page/DetailPage';
import MapPage from './page/MapPage';
import MassagePage from './page/MassagePage';
import EditdetailPage from './page/EditdetailPage';
import NavadminComp from './components/NavadminComp';
import ProfileadminPage from './page/ProfileadminPage';
import ChatbotPage from './page/ChatbotPage';

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        const savedRole = localStorage.getItem('role') || '';
        setIsLoggedIn(loggedInStatus);
        setRole(savedRole);
    }, []);

    const handleLogin = (username, role) => {
        setIsLoggedIn(true);
        setRole(role);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('role');
        navigate('/');
    };

    const hideNavbarAndFooter = ['/login', '/daftar', '/sandi', '/loginadmin', '/verifikasiemail'].includes(location.pathname);
    const showNavBerandaComp = /^\/(beranda|map|massage|wilayah|tambahkota|edit\/\d+|admintambah|profile|chatbot)$/.test(location.pathname);
    const showNavUlasanComp = /^\/ulasan(\/.*)?$/.test(location.pathname);
    const showNavadminComp = /^\/(detail|profileadmin)(\/.*)?$/.test(location.pathname);

    return (
        <div>
            {showNavBerandaComp ? <NavBerandaComp isLoggedIn={isLoggedIn} role={role} handleLogout={handleLogout} /> :
            showNavUlasanComp ? <NavUlasanComp isLoggedIn={isLoggedIn} role={role} handleLogout={handleLogout} /> :
            showNavadminComp ? <NavadminComp isLoggedIn={isLoggedIn} role={role} handleLogout={handleLogout} /> :
            !hideNavbarAndFooter && <NavbarComp isLoggedIn={isLoggedIn} role={role} handleLogout={handleLogout} />}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
                <Route path='/daftar' element={<DaftarPage />} />
                <Route path='/verifikasiemail' element={<VerifikasiEmail />} />
                <Route path='/sandi' element={<SandiPage />} />
                <Route path='/beranda' element={<BerandaPage />} />
                <Route path='/loginadmin' element={<LoginadminPage />} />
                <Route path='/ulasan/:id' element={<UlasanPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/admintambah' element={<Tambah />} />
                <Route path='/detail' element={<DetailPage />} />
                <Route path='/map' element={<MapPage />} />
                <Route path='/massage' element={<MassagePage />} />
                <Route path='/edit/:id' element={<EditdetailPage />} />
                <Route path='/profileadmin' element={<ProfileadminPage />} />
                <Route path='/chatbot' element={<ChatbotPage />} />
            </Routes>
            {!hideNavbarAndFooter && <FooterComp />}
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
