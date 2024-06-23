import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const hideNavbarAndFooter = ['/login', '/daftar', '/sandi', '/loginadmin', '/profile', '/verifikasiemail'].includes(location.pathname);
  const showNavBerandaComp = /^\/(beranda|map|massage|detail|wilayah|tambahkota|edit\/\d+|admintambah)$/.test(location.pathname);
  const showNavUlasanComp = /^\/ulasan(\/.*)?$/.test(location.pathname);

  return (
    <div>
      {showNavBerandaComp ? <NavBerandaComp /> : showNavUlasanComp ? <NavUlasanComp /> : !hideNavbarAndFooter && <NavbarComp isLoggedIn={isLoggedIn} />}
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
