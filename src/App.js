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

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && <NavbarComp />}
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/daftar' Component={DaftarPage} />
        <Route path='/sandi' Component={SandiPage} />
        <Route path='/beranda' Component={BerandaPage} />
      </Routes>
      {location.pathname !== '/login' && <FooterComp />}
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
