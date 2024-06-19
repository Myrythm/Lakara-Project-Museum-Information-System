import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./dist/css/main.css"
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

  const hideNavbarAndFooter = ['/login', '/daftar', '/sandi', '/loginadmin', '/profile', '/verifikasiemail'].includes(location.pathname);
  const showNavBerandaComp = /^\/(beranda|map|massage|detail|wilayah|tambahkota|edit\/\d+|admintambah)$/.test(location.pathname);
  const showNavUlasanComp = location.pathname === '/ulasan';


  return (
    <div>
      {showNavBerandaComp ? <NavBerandaComp /> : showNavUlasanComp ? <NavUlasanComp /> : !hideNavbarAndFooter && <NavbarComp />}
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/daftar' Component={DaftarPage} />
        <Route path='/verifikasiemail' Component={VerifikasiEmail} />
        <Route path='/sandi' Component={SandiPage} />
        <Route path='/beranda' Component={BerandaPage} />
        <Route path='/loginadmin' Component={LoginadminPage} />
        <Route path='/ulasan' Component={UlasanPage} />
        <Route path='/profile' Component={ProfilePage} />
        <Route path='/admintambah' Component={Tambah} />
        <Route path='/detail' Component={DetailPage} />
        <Route path='/map' Component={MapPage} />
        <Route path='/massage' Component={MassagePage} />
        <Route path='/edit/:id' Component={EditdetailPage} />
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