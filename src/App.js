import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./dist/css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';
import HomePage from "./page/HomePage";
import LoginPage from './page/LoginPage';
import DaftarPage from './page/DaftarPage';
import SandiPage from './page/SandiPage';
import BerandaPage from './page/BerandaPage';
import LoginadminPage from './page/LoginadminPage';
import UlasanPage from './page/UlasanPage';
import ProfilePage from './page/ProfilePage';
import NavBerandaComp from './components/NavBerandaComp';
import NavUlasanComp from './components/NavUlasanComp';


function App() {
  const location = useLocation();

  const hideNavbarAndFooter = ['/login', '/daftar', '/sandi', '/loginadmin', '/profile'].includes(location.pathname);
  const showNavBerandaComp = location.pathname === '/beranda';
  const showNavUlasanComp = location.pathname === '/ulasan';


  return (
    <div>
      {showNavBerandaComp ? <NavBerandaComp /> : showNavUlasanComp ? <NavUlasanComp /> : !hideNavbarAndFooter && <NavbarComp />}
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/daftar' Component={DaftarPage} />
        <Route path='/sandi' Component={SandiPage} />
        <Route path='/beranda' Component={BerandaPage} />
        <Route path='/loginadmin' Component={LoginadminPage} />
        <Route path='/ulasan' Component={UlasanPage} />
        <Route path='/profile' Component={ProfilePage} />
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