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
import Update from './page/Update';
import TabelPage from './page/TabelPage';
import WilayahPage from './page/WilayahPage';
import DetailPage from './page/DetailPage';
import TampulPage from './page/TampulPage';
import MapPage from './page/MapPage';
import MassagePage from './page/MassagePage';
import TamkoPage from './page/TamkoPage';

function App() {
  const location = useLocation();

  const hideNavbarAndFooter = ['/login', '/daftar', '/sandi', '/loginadmin', '/profile', '/verifikasiemail'].includes(location.pathname);
  const showNavBerandaComp = location.pathname === '/beranda' || location.pathname === '/map' || location.pathname === '/massage' || location.pathname === '/detail' || location.pathname === '/wilayah' || location.pathname === '/tambahkota';
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
        <Route path='/adminupdate' Component={Update} />
        <Route path='/tabel' Component={TabelPage} />
        <Route path='/wilayah' Component={WilayahPage} />
        <Route path='/detail' Component={DetailPage} />
        <Route path='/tambahpulau' Component={TampulPage} />
        <Route path='/tambahkota' Component={TamkoPage} />
        <Route path='/map' Component={MapPage} />
        <Route path='/massage' Component={MassagePage} />
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